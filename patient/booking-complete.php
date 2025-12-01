<?php
session_start();

if(!isset($_SESSION["user"]) || $_SESSION['usertype']!='p'){
    header("location: ../login.php");
    exit();
}

$useremail = $_SESSION["user"];


include("../connection.php");
$sqlmain= "select * from patient where pemail=?";
$stmt = $database->prepare($sqlmain);
$stmt->bind_param("s", $useremail);
$stmt->execute();
$userrow = $stmt->get_result();
$userfetch = $userrow->fetch_assoc();
$userid = intval($userfetch["pid"]);
$username = $userfetch["pname"];

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    if(isset($_POST["booknow"])){
        $apponum = intval($_POST["apponum"]);
        $scheduleid = intval($_POST["scheduleid"]);
        $date = $_POST["date"]; 
        $d  = DateTime::createFromFormat('d-m-Y', $date);
        // Verify this schedule isn't already booked by this user
        $checksql = "SELECT * FROM appointment WHERE scheduleid = ? AND pid = ?";
        $checkstmt = $database->prepare($checksql);
        $checkstmt->bind_param("ii", $scheduleid, $userid);
        $checkstmt->execute();
        $checkresult = $checkstmt->get_result();
        
        if($checkresult->num_rows > 0){

            header("location: schedule.php?action=booking-failed&reason=already-booked");
            exit();
        }
        

        $sql2 = "INSERT INTO appointment(pid,apponum,scheduleid,appodate) VALUES (?,?,?,?)";
        $stmt2 = $database->prepare($sql2);
        $stmt2->bind_param("iiis", $userid, $apponum, $scheduleid, $d->format('Y-m-d'));
       
        if($stmt2->execute()){
            header("location: appointment.php?action=booking-added&id=".$apponum."&titleget=none");
        } else {
            header("location: schedule.php?action=booking-failed&reason=database-error");
        }
    } else {
        header("location: schedule.php");
    }
} else {
    header("location: schedule.php");
}

?>