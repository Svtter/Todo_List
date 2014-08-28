<?php
session_start();
if($_SESSION[login] != 1){
	die('未登录');
}
$database_name = 'mydb';
$con = mysql_connect("localhost", "root", "root");
if (!$con) {
	die('Could not connect: '. mysql_error());
}
mysql_select_db($database_name, $con);

//echo $_POST['name'];查找是否有相同分类
$sql = "SELECT `name` FROM `Sort` WHERE name='$_POST[name]'";
$result = mysql_query($sql, $con);
if($row = mysql_fetch_array($result)){
	die('已有该项分类' . mysql_error());
}

//插入新的分类
$sql = "INSERT INTO `Sort`(`name`) VALUES ('$_POST[name]')";
if(!mysql_query($sql, $con)){
	die('添加错误' . mysql_error());
}
echo $_POST['name'] . '分类添加成功';

$con = mysql_close();
?>
