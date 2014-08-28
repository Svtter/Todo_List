<div class="navbar">
  <div class="navbar-inner">
    <div class="left sliding"><a href="forms.html" class="back link"><i class="icon icon-back-blue"></i><span>返回</span></a></div>
    <div class="center sliding">添加新计划</div>
    <div class="right"><a href="#" class="link open-panel icon-only"><i class="icon icon-bars-blue"></i></a></div>
  </div>
</div>
<div class="pages navbar-through">
  <div data-page="add_plan" class="page">
    <div class="page-content">
  	<?php session_start();
		if($_SESSION[login] != 1){
  	      	die ('<p>尚未登陆，所作更改不会被记录');
		}?>
      <div class="content-block">
        <p>Take a new plan!</p>
      <div class="content-block-title">计划细节</div>
      <form id="addplan_form" method="post" action="PlanList/checkPlan.php" class="store-data list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"></div>
              <div class="item-inner">
                <div class="item-title label">计划名称</div>
                <div class="item-input">
                  <input type="text" placeholder="Plan name" name="planname" class="planname"/>
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
                <div class="item-title label">计划简介</div>
                <div class="item-input">
                  <input type="text" placeholder="content" name="content" class="content"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <!--用ajax技术获取-->
        <div class="content-block-title">分类</div>
        <ul>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Books" checked="checked"/>
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">工作</div>
              </div>
            </label>
          </li>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Movies"/>
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">生活</div>
              </div>
            </label>
          </li>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Food"/>
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">学习</div>
              </div>
            </label>
          </li>
          <li>
            <label class="label-checkbox item-content">
              <input type="checkbox" name="ks-checkbox" value="Drinks"/>
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-title">记账</div>
              </div>
            </label>
          </li>
        </ul>
        <div class="content-block">
        <div class="row">
          <div class="col-50"><a href="#" class="button button-big active" id="addPlan_submit">提交</a></div>
          <div class="col-50"><a href="#" class="button button-big back">取消</a></div>
        </div>
      	</div>
        </form>
        </div>
      <!--以上为内容-->
    </div>
  </div>
</div>