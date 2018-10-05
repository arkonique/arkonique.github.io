<?php
    $from = $_POST['email'];
    $to = "mvenkatramanan@yahoo.com";
    $subject = $_POST['name']."'s query from www.iiserkol.ac.in/~mvenkat/";
    $message = $_POST['comments'];
    $headers = "From:" . $_POST['email'];
    mail($to,$subject,$message, $headers);
?>
