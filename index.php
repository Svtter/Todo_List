<?php session_start();?>
<!DOCTYPE html>
<html>
  <head>
   	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>Todo List</title>
    <link rel="stylesheet" href="css/framework7.css">
    <link rel="stylesheet" href="css/kitchen-sink.css">
  </head>
  <body>
    <div class="statusbar-overlay"></div>
    <div class="panel-overlay"></div>
    <div class="panel panel-left panel-cover">
      <div class="content-block-title">目录</div>
      <div class="content-block">
        <p><a href="#" class="close-panel">close me</a><a href="#" data-panel="right" class="open-panel">Right Panel</a></p>
      </div>
      <?php
      	if($_SESSION[login] != 1){
			echo '<div class="content-block-title">您当前是离线状态.</div>';      	
      	}
      	?>
      <div class="content-block-title">功能列表</div>
      <div class="list-block">
        <ul>
          <li><a href="PlanList/addNew.php" class="close-panel item-link">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">创建一个计划...</div>
                </div>
              </div></a></li>
          <li><a href="#" class="close-panel item-link">
              <div class="item-content addSort">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">创建一个分类...</div>
                </div>
              </div></a></li>
          <li><a href="PlanList/addEvent.php" class="close-panel item-link">
              <div class="item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">创建一个事件...</div>
                </div>
              </div></a></li>
        </ul>
      </div>
      <div class="content-block">
        <p>Long text block goes here.</p>
      </div>
    </div>
    <div class="panel panel-right panel-reveal">
      <div class="view view-right">
        <div class="navbar">
          <div class="navbar-inner">
            <div class="center sliding">用户</div>
          </div>          
        </div>
        <div class="pages navbar-through">
          <div data-page="panel-right1" class="page">
            <div class="page-content">
              <div class="content-block">
                <p><a href="#" class="close-panel">close me</a></p>
              </div>
              <div class="list-block">
                <ul>
                  <li><a href="LoginInfor/Login.html" class="item-link">
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">登陆</div>
                        </div>
                      </div></a></li>
                  <li><a href="LoginInfor/Register.html" class="item-link">
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">注册</div>
                        </div>
                      </div></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="views">
      <div class="view view-main">
        <div class="navbar">
          <div class="navbar-inner">
          	<div class="left"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars-blue"></i></a></div>
            <div class="center sliding">代办事项</div>
            <div class="right"><a href="#" class="open-panel link icon-only"><i class="icon icon-bars-blue"></i>
				<span>Menu</span>            
            </a></div>
          </div>
        </div>
        <div class="toolbar">
          <div class="toolbar-inner">
			  <a href="#" data-panel="right" class="open-panel link icon-only" id="User">
				  <?php
					if($_SESSION[login] != 1){
						echo '登陆';
					}
					else {
						echo $_SESSION[user][name];
					}
				  ?></a><a href="#" data-popover=".popover-menu" class="open-popover link">No use</a></div>
        </div>
        <div class="pages navbar-through toolbar-through">
          <div data-page="index" class="page">
            <div class="page-content">
              <div class="content-block-title">Welcome To TODO_LIST</div>
              <div class="list-block">
              <ul>
              	<li><div class="item-content"> 欢迎来到Todo List！</div></li>
                
				<?php                
					if($_SESSION['login'] != 1)
					{
						echo '<li><div class="item-content"><a href="#" data-panel="right" class="button link open-panel">您需要登陆，才能享受完整功能。</a> </div></li>';
					}
					else {
						echo '<li><div class="item-content"><a href="PlanList/addNew.php" class="button"> 创建一个计划...</a></div></li>';
						echo '<li><div class="item-content"><a href="#" class="button" id="addSort"> 创建一个分类...</a></div></li>';
					}                
                ?>
                
                
                </ul>
              </div>
              <div class="content-block-title">已有计划</div>
              <div class="list-block">
              <ul>
              	<li><div class="item-content"></div></li>                
				<?php                
					if($_SESSION['login'] != 1)
					{
						echo '<li><div class="item-content"><a href="#" data-panel="right" class="button link open-panel">您需要登陆，才能享受完整功能。</a> </div></li>';
					}
					else {
						echo '<li><a href="about.html" class="item-link">
                      <div class="item-content">
                        <div class="item-media"><i class="icon icon-f7"></i></div>
                        <div class="item-inner">
                          <div class="item-title">about</div>
                        </div>
                      </div></a></li>';
						echo '<li><div class="item-content"><a href="PlanList/addEvent.php" class="button"> 创建一个事件...</a></div></li>';
					}                
                ?>
                
                
                </ul>
              </div>
              <div class="content-block-title">Core Features</div>
              <div class="content-block">
                <p><a href="core-features.html" class="button">Read About Core Features</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="js/framework7.js"></script>
    <script type="text/javascript" src="js/kitchen-sink.js"></script>
  </body>
</html>
