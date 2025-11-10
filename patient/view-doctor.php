<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/animations.css">  
    <link rel="stylesheet" href="../css/main.css">  
    <link rel="stylesheet" href="../css/admin.css">
    
    <title>View Doctor</title>
</head>
<body>
<?php
session_start();
if(!isset($_SESSION['user']) || $_SESSION['usertype']!='p'){
    header('Location: ../login.php');
    exit;
}
include('../connection.php');
// validate id
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if($id<=0){
    echo '<p style="padding:20px">Invalid doctor id.</p>';
    exit;
}
// fetch doctor
$sql = "SELECT * FROM doctor WHERE docid=?";
$stmt = $database->prepare($sql);
$stmt->bind_param('i',$id);
$stmt->execute();
$res = $stmt->get_result();
if($res->num_rows==0){
    echo '<p style="padding:20px">Doctor not found.</p>';
    exit;
}
$row = $res->fetch_assoc();
$name = htmlspecialchars($row['docname'],ENT_QUOTES,'UTF-8');
$email = htmlspecialchars($row['docemail'],ENT_QUOTES,'UTF-8');
$tele = htmlspecialchars($row['doctel'],ENT_QUOTES,'UTF-8');
$spe = $row['specialties'];
// get specialty name
$stmt2 = $database->prepare("SELECT sname FROM specialties WHERE id=?");
$stmt2->bind_param('s',$spe);
$stmt2->execute();
$res2 = $stmt2->get_result();
$spcil_name = ($res2->num_rows>0) ? htmlspecialchars($res2->fetch_assoc()['sname'],ENT_QUOTES,'UTF-8') : '';
?>
<div class="container">
    <div class="menu">
        <!-- Menu intentionally left minimal here. The main site menu appears on other pages. -->
    </div>
    <div class="dash-body">
        <table border="0" width="100%" style=" border-spacing: 0;margin:0;padding:20px;margin-top:25px; ">
            <tr>
                <td colspan="2">
                    <h2>Doctor Details</h2>
                    <p><strong>Name:</strong> <?php echo $name;?></p>
                    <p><strong>Email:</strong> <?php echo $email;?></p>
                    <p><strong>Telephone:</strong> <?php echo $tele;?></p>
                    <p><strong>Specialties:</strong> <?php echo $spcil_name;?></p>
                    <p><a href="doctors.php" class="non-style-link"><button class="btn-primary-soft btn">Back to list</button></a></p>
                </td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
