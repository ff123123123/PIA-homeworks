<?php 

session_start();

	if(!isset($_SESSION['userlogin'])){
		header("Location: login.php");
	}

	if(isset($_GET['logout'])){
		session_destroy();
		unset($_SESSION);
		header("Location: login.php");
	}

?>

<?php 

$s_usertype = $_SESSION['userlogin']["usertype"];
echo "<br>";
	
	if ($s_usertype == 'admin') {
		header("Location: admin.php");

		echo $s_usertype;
	}
	elseif ($s_usertype == 'user') {
		header("Location: user.php");
		echo $s_usertype;
	}
	elseif (1 == 1) {
		header("Location: login.php");
	}
?>

</body>
</html>
