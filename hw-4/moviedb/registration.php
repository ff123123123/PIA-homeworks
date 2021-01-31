<?php

require_once('config.php');

?>

<!DOCTYPE html>
<html>
<head>
 <title>User Registration</title>
 <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<style>
 body, html {
  background: #603abc !important;
</style>
</head>
<body>
 <div>
  <form action="registration.php" method="post">
   <div class="container">
	<div class="row" style="margin-top:200px">
	 <div class="d-flex justify-content-center h-100">
	  <div class="col-sm-3 text-light">
	   <h1>Registration</h1>
	   <p>Fill up the form with correct values.</p>
	   <hr class="mb-3">
	   <label for="firstname"><b>First Name</b></label>
	   <input class="form-control" id="firstname" type="text" name="firstname" required>
 	   <label for="lastname"><b>Last Name</b></label>
	   <input class="form-control" id="lastname"  type="text" name="lastname" required>
	   <label for="email"><b>Email Address</b></label>
	   <input class="form-control" id="email"  type="email" name="email" required>
	   <label for="username"><b>Username</b></label>
	   <input class="form-control" id="username"  type="text" name="username" required>
	   <label for="password"><b>Password</b></label>
	   <input class="form-control" id="password"  type="password" name="password" required>
	   <hr class="mb-3">
	   <input class="btn btn-danger" type="submit" id="register" name="create" value="Sign Up">
	  </div>
	 </div>
    </div>
   </div>
  </form>
  <form action="login.php" method="post">
   <div class="container">
    <div class="d-flex justify-content-center h-100">
     <div class="col-sm-3">
      <hr class="mb-3">
      <input class="btn btn-danger" type="submit" id="login" name="create" value="Back to Login">
     </div>
    </div>
   </div>
  </form>
 </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script type="text/javascript">
	$(function(){
		$('#register').click(function(e){

			var valid = this.form.checkValidity();

			if(valid){

			var firstname 	= $('#firstname').val();
			var lastname	= $('#lastname').val();
			var email 		= $('#email').val();
			var username 	= $('#username').val();
			var password 	= $('#password').val();
		
				e.preventDefault();	

				$.ajax({
					type: 'POST',
					url: 'regproc.php',
					data: {firstname: firstname,lastname: lastname,email: email,username: username,password: password},
					success: function(data){
					Swal.fire({
								'title': 'Successful',
								'text': data,
								'type': 'success'
								})
					},
					error: function(data){
						Swal.fire({
								'title': 'Errors',
								'text': 'There were errors while saving the data.',
								'type': 'error'
								})
					}
				});

			}else{
				
			}
		});		
	});
	
</script>
</body>
</html>