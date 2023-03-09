<?php

function DATABASE_CONNECTION(){
    $hostName = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "kodesvision";
    $conn= new mysqli($hostName,$userName,$password,$dbName);
    if($conn){
       return $conn;
    }else{
      return null;
    }
}

function INSERT_EMAIL(){
  $conn = DATABASE_CONNECTION();
  $email= $_POST["message"];
  // prepare and bind
$stmt = $conn->prepare("INSERT INTO newsletter (email) VALUES (?)");
$stmt->bind_param("s",$email);  
if($stmt->execute()){
    return $email;
}
}


echo INSERT_EMAIL();




$option= $_POST["option"];

function SEND_MESSAGE(){
    $conn = DATABASE_CONNECTION();
    $username= $_POST["username"];
    $phone= $_POST["phone"];
    $message= $_POST["messagecontact"];
    // prepare and bind
  $stmt = $conn->prepare("INSERT INTO message (username,phone,message) VALUES (?,?,?)");
  $stmt->bind_param("sis",$username,$phone,$message);  
  if($stmt->execute()){
      return "message successfull";
  }
}
if(intval($option)===1){
    echo SEND_MESSAGE();
}

?>