<?php
$servername = "localhost";
$username = "root";  
$password = ""; 
$dbname = "doc"; 

$database = new mysqli($servername, $username, $password, $dbname);

if ($database->connect_error) {
    die("Error on connection : " . $database->connect_error);
}
?>

