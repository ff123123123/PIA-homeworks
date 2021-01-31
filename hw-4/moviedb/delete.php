<?php
$connect = mysqli_connect("localhost", "root", "root", "moviedb");
if(isset($_POST["id"]))
{
 $query = "DELETE FROM movies WHERE id = '".$_POST["id"]."'";
 if(mysqli_query($connect, $query))
 {
  echo 'Data Deleted';
 }
}
?>
