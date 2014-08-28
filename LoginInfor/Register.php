<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>register</title>
</head>
<body>
<?php
session_destroy();
$database_name = 'mydb';
$con = mysql_connect("localhost", "root", "root");
if (!$con) {
	die('Could not connect: '. mysql_error());
}

/*echo $_POST[username];
echo $_POST[password];
echo $_POST[email];
echo $_POST[name];
*/
if ($_POST[username] == null || $_POST[password] == null || $_POST[email] == null || $_POST[name] == null) {
	die('Add lost. You must Complete Your information'.mysql_error());
}

mysql_select_db($database_name, $con);

$sql = "INSERT INTO `user`(`username`, `email`, `password`, `name`) 
VALUES 
('$_POST[username]','$_POST[email]','$_POST[password]','$_POST[name]')";

if (!mysql_query($sql, $con)) {
	echo "注册失败,用户已存在<br>";
	die('Error: '.mysql_error());
}


echo "注册成功！";
// some code
mysql_close($con); 
?>
</body>
</html>