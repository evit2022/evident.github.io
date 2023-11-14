<?php

$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mobile = $_POST['mobile'];

$to = "evident1053@gmail.com";

$subject = "mail from evident creative tech business";
$txt = "Name = ". $name ."\r\n Company = ". $company ."\r\n Email = " . $email . "\r\n Mobile =" . $mobile . "\r\n Message =" . $message;
$headers = "From: noreply@evident.ae". "\r\n" . "cc: rekha.1053@gmail.com";

if($email!=NULL){
mail($to,$subject,$txt,$headers);
header("location:thanks.htm");
}


//redirect  

?>