<?php

// =========================================================================
// TRADITIONAL PHP LOGIN SCRIPT
// This script reads from $_POST and uses header() to redirect.
// It does NOT return JSON.
// =========================================================================

session_start();
$_SESSION["user"]="";
$_SESSION["usertype"]="";

date_default_timezone_set('Europe/Zurich');
$_SESSION["date"] = date('d-m-Y');

include("connection.php"); 

// We now check $_POST, just like your original file.
if ($_POST) {

    // The 'name' attributes from Login.jsx are 'email' and 'password'
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        // Redirect back to login with an error
        // You can add error handling here, e.g., header('Location: http://localhost:5173/login?error=empty');
        // For now, we just fail silently or send to a generic error page.
        echo "Email or password was empty.";
        exit();
    }

    if (!isset($database) || $database->connect_error) {
        echo "Database connection failed.";
        exit();
    }

    $stmt = $database->prepare("SELECT usertype FROM webuser WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    $login_success = false;

    if ($result->num_rows == 1) {
        $utype = $result->fetch_assoc()['usertype'];
        $db_table = '';
        $email_col = '';
        $password_col = '';

        if ($utype == 'p') {
            $db_table = 'patient';
            $email_col = 'pemail';
            $password_col = 'ppassword';
        } elseif ($utype == 'a') {
            $db_table = 'admin';
            $email_col = 'aemail';
            $password_col = 'apassword';
        } elseif ($utype == 'd') {
            $db_table = 'doctor';
            $email_col = 'docemail';
            $password_col = 'docpassword';
        }
        
        if (!empty($db_table)) {
            $stmt = $database->prepare("SELECT {$email_col} FROM {$db_table} WHERE {$email_col} = ? AND {$password_col} = ?");
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $checker = $stmt->get_result();

            if ($checker->num_rows == 1) {
                // SUCCESS! Set session and redirect.
                $_SESSION['user'] = $email;
                $_SESSION['usertype'] = $utype;
                
                $base_url = "http://localhost/doctor-appointment-system";
                
                if ($utype == 'p') {
                    header("Location: {$base_url}/patient/index.php");
                } elseif ($utype == 'a') {
                    header("Location: {$base_url}/admin/index.php");
                } elseif ($utype == 'd') {
                    header("Location: {$base_url}/doctor/index.php");
                }
                
                $login_success = true;
                exit(); // Always exit after a header redirect
            }
        }
    }

    if (!$login_success) {
        // If login failed, redirect back to the React login page with an error
        // Note: Your React app is running on port 5173
        $react_login_url = "http://localhost/doctor-appointment-system/login?error=invalid_credentials";
        header("Location: " . $react_login_url);
        exit();
    }

} else {
    // If someone accesses login.php directly without POST data
    $react_login_url = "http://localhost/doctor-appointment-system/login";
    header("Location: " . $react_login_url);
    exit();
}

?>