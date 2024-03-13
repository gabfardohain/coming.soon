<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer (true);

$mail->isSMTP();
$mail->SMPTAuth = true;

$mail->Host = "smpt.google.com";
$mail->SMTPSecure = PHPMailer :: ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "unionstech777@gmail.com";
$mail->Password = "wtiu dlsy cqrh wphk";

$mail->setFrom($email, $name);
$mail->addAdress("jpcslengman@gmail.com", "Joao");

$mail->subject = $subject;
$mail->Body = $message;

$mail->send();

echo "email enviado"