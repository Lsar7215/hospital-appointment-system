<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'mailer/Exception.php'; // Path to the PHPMailer Exception file
require 'mailer/PHPMailer.php'; // Path to the PHPMailer class file
require 'mailer/SMTP.php';      // Path to the PHPMailer SMTP class file


function send_email_notification(
    string $to_email,
    string $to_name,
    string $subject,
    string $body_html
): bool {
    $mail = new PHPMailer(true);

    try {
        // --- 1. SMTP SERVER CONFIGURATION (UPDATED FOR SENDGRID) ---
        $mail->isSMTP();                             // Use SMTP
        $mail->Host       = M_HOST;                  // <-- Using defined constant M_HOST
        $mail->SMTPAuth   = true;                    // Enable SMTP authentication
        
        // --- 🔑 IMPORTANT: SENDGRID CREDENTIALS ---
        $mail->Username   = M_USER;                  // <-- Using defined constant M_USER
        $mail->Password   = M_PASSWORD;              // <-- Using defined constant M_PASSWORD
        // ------------------------------------

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use STARTTLS encryption
        $mail->Port       = 587;                     // Port 587 (Standard for STARTTLS)
        $mail->CharSet    = 'UTF-8';

        // --- 2. SENDER (FROM) CONFIGURATION ---
        // This email MUST be a VERIFIED sender identity in your SendGrid account.
        $sender_email = 'no-reply@YOUR-VERIFIED-DOMAIN.com'; 
        $sender_name = 'Appointment System';

        $mail->setFrom($sender_email, $sender_name);
        
        // --- 3. RECIPIENT CONFIGURATION ---
        $mail->addAddress($to_email, $to_name); 

        // --- 4. CONTENT ---
        $mail->isHTML(true); 
        $mail->Subject = $subject;
        $mail->Body = '
        <html><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                '.$body_html.'
                <p style="margin-top: 30px; font-size: 12px; color: #777;">
                    This is an automated reminder. Please do not reply to this email.
                </p>
            </div>
        </body></html>';
        $mail->AltBody = strip_tags($body_html);

        // --- 5. SEND ---
        $mail->send();
        return true;

    } catch (Exception $e) {
        error_log("PHPMailer Error: {$mail->ErrorInfo} for recipient {$to_email}");
        return false;
    }
}
?>