<?php
    $from = $_POST['email'];
    $to = "archonriddhi@gmail.com";
    $subject = $_POST['name']."'s query from yourwebsite.com";
    $message = $_POST['comments'];
    $headers = "From:" . $_POST['email'];
    mail($to,$subject,$message, $headers);
?>
