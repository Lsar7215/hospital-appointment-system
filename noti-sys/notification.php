<?php
include("config_bootstrap.php"); 

$today = new DateTime(); 
$today->setTime(0, 0, 0); 
$today_sql = $today->format('Y-m-d'); 


$sql = "SELECT 
            a.appoid, 
            a.appodate, 
            a.apponum,
            p.pemail, 
            p.pname 
        FROM 
            appointment a
        INNER JOIN 
            patient p ON a.pid = p.pid
        WHERE 
            a.appodate >= ?";

if ($stmt = $database->prepare($sql)) {
    $stmt->bind_param("s", $today_sql);
    $stmt->execute();
    $result = $stmt->get_result();
    
    while ($row = $result->fetch_assoc()) {
        $appo_id = $row['appoid'];
        $appo_date_str = $row['appodate'];
        $appo_num = $row['apponum'];
        $patient_email = $row['pemail'];
        $patient_name = $row['pname'];
        
        $appo_date = DateTime::createFromFormat('Y-m-d', $appo_date_str);
        
        $interval = $today->diff($appo_date);
        $days_to_appointment = intval($interval->days);
        
        if ($interval->invert == 1) { continue; } // Skip past appointments

        // Check 7 days and 1 day
        $reminders = [7, 1];

        foreach ($reminders as $days_before) {
            if ($days_to_appointment == $days_before) {
                
                $subject = ($days_before == 7) 
                    ? "Appointment Reminder: 1 Week Away"
                    : "Urgent Appointment Reminder: Tomorrow!";

                $body_html = "
                    <p>Dear {$patient_name},</p>
                    <p>This is a reminder that your appointment (Appointment #{$appo_num}) is scheduled in **{$days_before} day(s)** on <strong>" . $appo_date->format('l, F j, Y') . "</strong>.</p>
                    <p>Please log in to your patient portal for full details.</p>
                ";

                // Call the reliable email function
                $success = send_email_notification(
                    $patient_email,
                    $patient_name,
                    $subject,
                    $body_html
                );

                if ($success) {
                    error_log("Successfully sent {$days_before}-day reminder for Appointment ID: {$appo_id}");
                } else {
                    error_log("FAILED to send {$days_before}-day reminder for Appointment ID: {$appo_id}");
                }
            }
        }
    }
    $stmt->close();
}

$database->close();
?>