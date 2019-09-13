<?php

if($_POST["submit"]) {
    $recipient="shivankmaheshwari14@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $senderEmail");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>