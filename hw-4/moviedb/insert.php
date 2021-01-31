<?php
$connect = mysqli_connect("localhost", "root", "root", "moviedb");
if(!isset($_POST["title"], $_POST["plot"], $_POST["writer"], $_POST["director"], $_POST["production"], $_POST["cast"], $_POST["year"], $_POST["length"], $_POST["genre"]))
{
	die("No Data");
 }
 $title = mysqli_real_escape_string($connect, $_POST["title"]);
 $plot = mysqli_real_escape_string($connect, $_POST["plot"]);
 $writer = mysqli_real_escape_string($connect, $_POST["writer"]);
 $director = mysqli_real_escape_string($connect, $_POST["director"]);
 $production = mysqli_real_escape_string($connect, $_POST["production"]);
 $cast = mysqli_real_escape_string($connect, $_POST["cast"]);
 $year = mysqli_real_escape_string($connect, $_POST["year"]);
 $length = mysqli_real_escape_string($connect, $_POST["length"]);
 $genre = mysqli_real_escape_string($connect, $_POST["genre"]);
 $query = "INSERT INTO movies(title, plot, writer, director, production, cast, year, length, genre) VALUES('$title', '$plot', '$writer', '$director', '$production', '$cast', '$year', '$length', '$genre')";
  if(mysqli_query($connect, $query))
 {
  echo 'Data Inserted';
 }
?>