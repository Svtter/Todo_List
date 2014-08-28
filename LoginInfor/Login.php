<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login</title>
</head>
<body>

<?php
session_destroy();
session_start();
$database_name = "mydb";
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
/*echo $_POST[username];
echo $_POST[password];*/
mysql_select_db($database_name, $con);

$sql = "SELECT * FROM user
where username='$_POST[username]' and password='$_POST[password]'";

$result = mysql_query($sql, $con);

if($row = mysql_fetch_array($result))
{
	echo '登陆成功!欢迎用户';
	$_SESSION[user] = $row;
	$_SESSION['login'] = 1;
	echo $_SESSION[user]['name'];
}
else
{
	echo '密码或用户名错误!';
}



// some code
mysql_close($con);
?></body>
</html>