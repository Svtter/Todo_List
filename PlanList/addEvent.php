<div class="navbar">
  <div class="navbar-inner">
    <div class="left sliding"><a href="forms.html" class="back link"><i class="icon icon-back-blue"></i><span>返回</span></a></div>
    <div class="center sliding">添加新事项</div>
    <div class="right"><a href="#" class="link open-panel icon-only"><i class="icon icon-bars-blue"></i></a></div>
  </div>
</div>
<div class="pages navbar-through">
  <div data-page="add_event" class="page">
    <div class="page-content">
  	<?php session_start();
		if($_SESSION[login] != 1){
  	      	die ('<p>尚未登陆，所作更改不会被记录');
		}?>
      <div class="content-block">
        <p>创建一个新的事项!</p>
      <div class="content-block-title">事项细节</div>
      <form id="addevent_form" method="post" action="PlanList/checkEvent.php" class="store-data list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"></div>
              <div class="item-inner">
                <div class="item-title label">事项名称</div>
                <div class="item-input">
                  <input type="text" placeholder="事项名称" name="eventname" class="eventname"/>
                </div>
              </div>
            </div>
          </li>
          <li>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"></div>
              <div class="item-inner">
                <div class="item-title label">事项简介</div>
                <div class="item-input">
                  <input type="text" placeholder="事项内容" name="content" class="content"/>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"></div>
              <div class="item-inner">
                <div class="item-title label">属于计划</div>
                <div class="item-input">
					<input type="hidden" name="sort"/>
                <!--php获取-->
                <?php
                	if($_SESSION[login != 1]){
						echo 'False';                	
                	}
                	else {
						$database_name = 'mydb';
						$con = mysql_connect("localhost", "root", "root");
						if (!$con) {
							die('Could not connect: '.mysql_error());
						}

						//两个语句出不来
						mysql_select_db($database_name, $con);
						$uid = $_SESSION[user][uid];
						$sql = "select `pid` from `UserManage`where `user_uid` = '$uid';";
						$result = mysql_query($sql, $con);
						$row = mysql_fetch_array($result);
						//~ echo $row[pid]. '<br>';

						//第一次搜索就可以得到多个结果
						$sql = "select * from `plan` where `pid`=$row[pid]";
						$result = mysql_query($sql, $con);
						$row = mysql_fetch_array($result);

						$result = mysql_query($sql, $con);
						echo "<select name='select'>";
						while($row = mysql_fetch_array($result)){
							echo "<option>" . $row[name] . "</option>";
							//~ echo "<h3>".$row[name]."</h3>";
						}
						
						echo "</select>";
									        
						$con = mysql_close();
					}
                ?>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
        <!--用ajax技术获取-->
        <div class="content-block">
        <div class="row">
          <div class="col-50"><a href="#" class="button button-big active" id="addEvent_submit">提交</a></div>
          <div class="col-50"><a href="#" class="button button-big back">取消</a></div>
        </div>
      	</div>
        </form>
        </div>
      <!--以上为内容-->
    </div>
  </div>
</div>
