<?php
use PHPMailer\PHPMailer\PHPMailer;

if(assert($_POST['name']) && isset($_POST['email'])){
$name = $_POST['name'];
$name = $_POST['email'];
$name = $_POST['number'];
$name = $_POST['body'];


require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";

$mail = new PHPMailer();

$mail->isSMTP();
$mail->Host = "smtp.evident.ae";
$mail->SMTPAuth = true;
$mail->Username = "rekha.ch@evident.ae";
$mail->Password = 'Eximafalcon@123';
$mail->port =465;
$mail->SMTPSecure = "ssl";

$mail-isHTML(true);
$mail->setfrom($email, $name);
$mail->addAddress = ("rekha.ch@evident.ae");
$mail->$subject = ("$email, ($subject)");
$mail->Body = $body;

if($mail->sent()){


    $status = "Succss";
    $response = "email is sent!"
}
else{

    $status = "failed";
    $response = "not correct"
}

}

?>







