<?php

//echo "run";
session_start();
/*echo $_SESSION[login];
echo '</br>';
echo $_POST[planname];
echo '</br>';
echo $_POST[content];
echo '</br>';
*/
if($_SESSION[login] != 1){
	die('未登录');
}
$database_name = 'mydb';
$con = mysql_connect("localhost", "root", "root");
if (!$con) {
	die('Could not connect: '. mysql_error());
}

if($_POST[planname] == NULL || $_POST[content] == NULL){
	die('Add lost. You must Complete Your information');
}
mysql_select_db($database_name, $con);
//echo "selectdb";
//计划名称唯一
$sql = "INSERT INTO `plan`(`name`, `content`) VALUES ('$_POST[planname]','$_POST[content]')";
if(!mysql_query($sql, $con)){
	die('添加失败' . mysql_error());
}
else {
	$sql = "SELECT `pid`FROM `plan` WHERE name='$_POST[planname]' and content='$_POST[content]'";
	$result=mysql_query($sql, $con);
	//未考虑失败问题
	if($row=mysql_fetch_array($result)){
		$uid = $_SESSION[user][uid];
		$pid = $row[pid];
//		echo $uid . '<br>' . $pid . '<br>';
		$sql = "INSERT INTO `UserManage`(`pid`, `user_uid`) VALUES ('$pid','$uid')";
		if(!mysql_query($sql, $con)){
			die('The second add wrong: ' . mysql_error());
		}
		else{
			echo "添加成功!";
		}
	}
}
$con = mysql_close();
?>