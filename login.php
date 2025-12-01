<?php

session_start();
$_SESSION["user"]="";
$_SESSION["usertype"]="";

date_default_timezone_set('Europe/Zurich');
$_SESSION["date"] = date('d-m-Y');

include("connection.php"); 

if ($_POST) {

    $email = $_POST['email'] ?? '';
    $password_input = $_POST['password'] ?? ''; // Renamed for clarity

    if (empty($email) || empty($password_input)) {
        
        echo "Email or password was empty.";
        exit();
    }

    if (!isset($database) || $database->connect_error) {
        echo "Database connection failed.";
        exit();
    }

    // 1. Get usertype from webuser table
    $stmt = $database->prepare("SELECT usertype FROM webuser WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    $login_success = false;
    $hashed_password_from_db = '';
    $email_found = false;

    if ($result->num_rows == 1) {
        $utype = $result->fetch_assoc()['usertype'];
        $db_table = '';
        $email_col = '';
        $password_col = '';
        $email_found = true;

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
            // 2. 🔑 NEW: Retrieve the stored HASHED password for verification
            // We select the hashed password, not compare the plaintext one in the SQL query
            $stmt = $database->prepare("SELECT {$password_col} FROM {$db_table} WHERE {$email_col} = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $checker = $stmt->get_result();

            if ($checker->num_rows == 1) {
                $hashed_password_from_db = $checker->fetch_assoc()[$password_col];

                // 3. 🔑 NEW: Verify the user's input password against the stored hash
                if (password_verify($password_input, $hashed_password_from_db)) {
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
    }

    // Fall-through if login failed (invalid credentials or email not found)
    if (!$login_success) {
        // If login failed, redirect back to the React login page with an error
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
