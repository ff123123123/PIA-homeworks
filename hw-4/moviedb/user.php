<?php 

session_start();

  if(!isset($_SESSION['userlogin'])){
    header("Location: login.php");
  }

$s_usertype = $_SESSION['userlogin']["usertype"];
  
  if ($s_usertype != 'user') {
    header("Location: login.php");
  }

?>

<html>
 <head>
  <title>MovieDB</title>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.15/js/dataTables.bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.js"></script>
  <style>
  body
  {
   margin:0;
   padding:0;
   background-color:#603abc;
  }
  .box
  {
   width:1270px;
   padding:20px;
   background-color:#fff;
   border:1px solid #ccc;
   border-radius:5px;
   margin-top:25px;
   box-sizing:border-box;
  }
  </style>
 </head>
 <body>
  <div class="container box">
   <h1 align="center">MovieDB User Panel</h1>
   <br />
    <div align="right">
     <form action="logout.php" method="post">
      <input name="return" type="hidden" value="<?php echo urlencode($_SERVER["PHP_SELF"]);?>" />
      <button type="button" class="btn btn-danger" type="submit" value="Logout" />
     </form>
     <a type="button" class="btn btn-danger" href="logout.php">Logout</a>
    </div>
    <br />
   <div class="table-responsive">
   <br />
    <div align="right">
     <!--<button type="button" name="add" id="add" class="btn btn-info">Add</button>-->
    </div>
    <br />
    <div id="alert_message"></div>
    <table id="movie_data" class="table table-bordered table-striped">
     <thead>
      <tr>
       <th>Title</th>
       <th>Plot</th>
       <th>Writer</th>
       <th>Director</th>
       <th>Production House</th>
       <th>Cast</th>     
       <th>Year</th>
       <th>Length</th>
       <th>Genre</th>
       <!--<th></th>-->
      </tr>
     </thead>
    </table>
   </div>
  </div>
 </body>
</html>

<script type="text/javascript" language="javascript" >
 $(document).ready(function(){
  
  fetch_data();

  function fetch_data()
  {
   var dataTable = $('#movie_data').DataTable({
    "processing" : true,
    "serverSide" : true,
    "order" : [],
    "ajax" : {
     url:"fetch_u.php",
     type:"POST"
    }
   });
  }
  
  /*
  function update_data(id, column_name, value)
  {
   $.ajax({
    url:"update.php",
    method:"POST",
    data:{id:id, column_name:column_name, value:value},
    success:function(data)
    {
     $('#alert_message').html('<div class="alert alert-success">'+data+'</div>');
     $('#movie_data').DataTable().destroy();
     fetch_data();
    }
   });
   setInterval(function(){
    $('#alert_message').html('');
   }, 5000);
  }
  */

  $(document).on('blur', '.update', function(){
   var id = $(this).data("id");
   var column_name = $(this).data("column");
   var value = $(this).text();
   update_data(id, column_name, value);
  });
  
  $('#add').click(function(){
   var html = '<tr>';
   html += '<td contenteditable id="data1"></td>';
   html += '<td contenteditable id="data2"></td>';
   html += '<td contenteditable id="data3"></td>';
   html += '<td contenteditable id="data4"></td>';
   html += '<td contenteditable id="data5"></td>';
   html += '<td contenteditable id="data6"></td>';
   html += '<td contenteditable id="data7"></td>';
   html += '<td contenteditable id="data8"></td>';
   html += '<td contenteditable id="data9"></td>';
   html += '<td><button type="button" name="insert" id="insert" class="btn btn-success btn-xs">Insert</button></td>';
   html += '</tr>';
   $('#movie_data tbody').prepend(html);
  });
  
  $(document).on('click', '#insert', function(){
   var title = $('#data1').text();
   var plot = $('#data2').text();
   var writer = $('#data3').text();
   var director = $('#data4').text();
   var production = $('#data5').text();
   var cast = $('#data6').text();
   var year = $('#data7').text();
   var length = $('#data8').text();
   var genre = $('#data9').text();
   if(title != '' && plot != '' && writer != '' && director != '' && production != '' && cast != '' && year != '' && length != ''&& genre != '')
   {
    $.ajax({
     url:"insert.php",
     method:"POST",
     data:{title:title, plot:plot, writer:writer, director:director, production:production, cast:cast, year:year, length:length, genre:genre},
     success:function(data)
     {
      $('#alert_message').html('<div class="alert alert-success">'+data+'</div>');
      $('#movie_data').DataTable().destroy();
      fetch_data();
     }
    });
    setInterval(function(){
     $('#alert_message').html('');
    }, 5000);
   }
   else
   {
    alert("All Fields are required");
   }
  });
  
  $(document).on('click', '.delete', function(){
   var id = $(this).attr("id");
   if(confirm("Are you sure you want to remove this?"))
   {
    $.ajax({
     url:"delete.php",
     method:"POST",
     data:{id:id},
     success:function(data){
      $('#alert_message').html('<div class="alert alert-success">'+data+'</div>');
      $('#movie_data').DataTable().destroy();
      fetch_data();
     }
    });
    setInterval(function(){
     $('#alert_message').html('');
    }, 5000);
   }
  });
 });
</script>
