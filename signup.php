<?php

session_start();
include("connection.php"); 

date_default_timezone_set('Europe/Zurich');
$date = date('d-m-Y');

// Base URL for React app (where it's running)
$react_app_url = "http://localhost:5173"; 
// Base URL for PHP app (for successful redirects) [Hopefully]
$php_app_url = "http://localhost/doctor-appointment-system";

// Function to redirect back to React with an error
function redirect_with_error($error_message) {
    global $react_app_url;
    header("Location: {$react_app_url}/signup?error=" . urlencode($error_message));
    exit();
}

if ($_POST) {

    // Get Data from React Form 
    $email = $_POST['email'] ?? '';
    $fname = $_POST['firstName'] ?? '';
    $lname = $_POST['lastName'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirmPassword'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $dob = $_POST['dob'] ?? '';

    // Combine address fields from the form, will seperate once integrated new DB schema
    $line1 = $_POST['line1'] ?? '';
    $line2 = $_POST['line2'] ?? ''; 
    $city = $_POST['city'] ?? '';
    $state = $_POST['state'] ?? '';
    $postal_code = $_POST['postalCode'] ?? '';
    $country = $_POST['country'] ?? '';

    // Create a full address string for the 'paddress' column
    $full_address = $line1;
    if (!empty($line2)) {
        $full_address .= ", " . $line2;
    }
    $full_address .= ", " . $city . ", " . $state . " " . $postal_code . ", " . $country;

    // Validation
    if (empty($email) || empty($fname) || empty($lname) || empty($password) || empty($phone) || empty($dob) || empty($line1) || empty($city) || empty($state) || empty($postal_code) || empty($country)) {
        redirect_with_error("Please fill out all required fields.");
    }

    if ($password !== $confirm_password) {
        redirect_with_error("Passwords do not match.");
    }

    if (!isset($database) || $database->connect_error) {
        redirect_with_error("Database connection failed. Please contact support.");
    }

    // Check if Email Already Exists in 'webuser' table
    $stmt = $database->prepare("SELECT * FROM webuser WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        redirect_with_error("An account with this email already exists.");
    }

    // Insert into Database
    $database->begin_transaction();
    
    try {
        // Insert into 'patient' table
        // SQL columns: pemail, pname, ppassword, paddress, pdob, ptel
        $full_name = $fname . " " . $lname;
        
        $stmt_patient = $database->prepare("INSERT INTO patient (pemail, pname, ppassword, paddress, pdob, ptel) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt_patient->bind_param("ssssss", $email, $full_name, $password, $full_address, $dob, $phone);
        $stmt_patient->execute();

        // Insert into 'webuser' table
        // SQL columns: email, usertype
        $usertype = 'p'; // 'p' for patient
        $stmt_webuser = $database->prepare("INSERT INTO webuser (email, usertype) VALUES (?, ?)");
        $stmt_webuser->bind_param("ss", $email, $usertype);
        $stmt_webuser->execute();

        // If both queries were successful, commit the changes
        $database->commit();

        // --- 5. Success: Log In and Redirect to Dashboard ---
        $_SESSION["user"] = $email;
        $_SESSION["usertype"] = 'p';
        
        header("Location: {$php_app_url}/patient/index.php");
        exit();

    } catch (mysqli_sql_exception $exception) {
        // If anything went wrong, roll back the changes
        $database->rollback();
        redirect_with_error("An error occurred during registration. Please try again.");
    }

} else {
    // If someone accesses this page directly (not via POST)
    header("Location: {$react_app_url}/signup");
    exit();
}
?>