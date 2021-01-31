<?php
include("config.php");

if(isset($_POST['but_upload'])){
 
  $picture = $_FILES['file']['picture'];
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["file"]["picture"]);

  // Select file type
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  // Valid file extensions
  $extensions_arr = array("jpg","jpeg","png","gif");

  // Check extension
  if( in_array($imageFileType,$extensions_arr) ){
 
     // Insert record
     $query = "INSERT INTO movies (picture) VALUES ('".$picture."')";
     mysqli_query($con,$query);
  
     // Upload file
     move_uploaded_file($_FILES['file']['tmp_name'],$target_dir.$picture);
  }
}
?>