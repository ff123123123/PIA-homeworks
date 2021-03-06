<?php
//fetch_u.php
$connect = mysqli_connect("localhost", "root", "root", "moviedb");
$columns = array('title', 'plot', 'writer', 'director', 'production', 'cast', 'year', 'length', 'genre');

$query = "SELECT * FROM movies ";

if(isset($_POST["search"]["value"]))
{
 $query .= '
 WHERE title LIKE "%'.$_POST["search"]["value"].'%" 
 OR plot LIKE "%'.$_POST["search"]["value"].'%" 
 OR writer LIKE "%'.$_POST["search"]["value"].'%" 
 OR director LIKE "%'.$_POST["search"]["value"].'%" 
 OR production LIKE "%'.$_POST["search"]["value"].'%" 
 OR cast LIKE "%'.$_POST["search"]["value"].'%" 
 OR year LIKE "%'.$_POST["search"]["value"].'%" 
 OR length LIKE "%'.$_POST["search"]["value"].'%" 
 OR genre LIKE "%'.$_POST["search"]["value"].'%" 
 ';
}

if(isset($_POST["order"]))
{
 $query .= 'ORDER BY '.$columns[$_POST['order']['0']['column']].' '.$_POST['order']['0']['dir'].' 
 ';
}
else
{
 $query .= 'ORDER BY id DESC ';
}

$query1 = '';

if($_POST["length"] != -1)
{
 $query1 = 'LIMIT ' . $_POST['start'] . ', ' . $_POST['length'];
}

$number_filter_row = mysqli_num_rows(mysqli_query($connect, $query));

$result = mysqli_query($connect, $query . $query1);

$data = array();

while($row = mysqli_fetch_array($result))
{
 $sub_array = array();
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="title">' . $row["title"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="plot">' . $row["plot"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="writer">' . $row["writer"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="director">' . $row["director"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="production">' . $row["production"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="cast">' . $row["cast"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="year">' . $row["year"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="length">' . $row["length"] . '</div>';
 $sub_array[] = '<div contenteditable class="update" data-id="'.$row["id"].'" data-column="genre">' . $row["genre"] . '</div>';
 $sub_array[] = '<div id="'.$row["id"].'"</div>';
 //$sub_array[] = '<button type="button" name="delete" class="btn btn-danger btn-xs delete" id="'.$row["id"].'">Delete</button>';
 $data[] = $sub_array;
}

function get_all_data($connect)
{
 $query = "SELECT * FROM movies";
 $result = mysqli_query($connect, $query);
 return mysqli_num_rows($result);
}

$output = array(
 "draw"    => intval($_POST["draw"]),
 "recordsTotal"  =>  get_all_data($connect),
 "recordsFiltered" => $number_filter_row,
 "data"    => $data
);

echo json_encode($output);

?>
