<?php
$nombre = $_POST["nombre"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];
$body = "Nombre: ". $nombre . "<br>Correo: " . $correo . "<br>Mensaje: ". $mensaje;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug =0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'felipevargas989898@gmail.com';                     //SMTP username
    $mail->Password   = 'pipito123';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('felipevargas989898@gmail.com', $nombre);
    $mail->addAddress('felipevargas989898@gmail.com', 'Felipe');     //Add a recipient
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Email desde la web';
    $mail->Body    = $body;
    $mail->CharSet    = 'UTF-8';
    $mail->send();
    header('Location: enviado.html');

} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
}