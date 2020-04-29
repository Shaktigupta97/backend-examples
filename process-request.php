<?php

if(isset($_POST['name-field']) && isset($_POST['email-field'])){
  echo '<p>'.$_POST['name-field'].'</p>';
  echo '<p>'.$_POST['email-field'].'</p>';
  echo '<p>'.$_POST['address-field'].'</p>';
  echo '<p>'.$_POST['city-field'].'</p>';
} else {
  echo 'Post data not received!';
}

// $password = '123456';

// if(isset($_POST['password-field'])){
//   if($password == $_POST['password-field']){
//     echo 'success';
//   } else {
//     echo 'Failed';
//   }
// }