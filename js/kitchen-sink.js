var myApp = new Framework7({
	modalTitle: 'Framework7',
	animateNavBackIcon: true
});

// Expose Internal DOM library
var $$ = Framework7.$;


// Add main view
var mainView = myApp.addView('.view-main', {
	// Enable Dynamic Navbar for this view
	dynamicNavbar: true
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
	// Enable Dynamic Navbar for this view
	dynamicNavbar: true
});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function() {
	myApp.showIndicator();
});
$$(document).on('ajaxComplete', function() {
	myApp.hideIndicator();
});

// Events for specific pages when it initialized
$$(document).on('pageInit', function(e) {
	var page = e.detail.page;
	//Login information
	if (page.name === 'form-elements') {

		$$('#lmsg').on('click', function() {
			var msg = document.getElementById('lmsg');
			var url = 'LoginInfor/Logout.php';

			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send();


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					msg.innerHTML = ajax.responseText;
				}
			}
			myApp.hidePreloader();
		});
		//register ajax
		$$('#button-register').on('click', function() {
			myApp.showPreloader();

			var msg = document.getElementById('msg');
			var form = document.getElementById('register');
			var username = form.username.value;
			var password = form.password.value;
			var email = form.email.value;
			var name = form.name.value;

			var url = 'LoginInfor/Register.php';

			var postStr = 'username=' + username + '&password=' + password + '&email=' + email + '&name=' + name;

			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send(postStr);


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					msg.innerHTML = ajax.responseText;
				}
			}
			myApp.hidePreloader();
		});
		$$('#button-login').on('click', function() {
			myApp.showPreloader();

			//just for fun~
			setTimeout(function() {
				myApp.hidePreloader();
			}, 2000);
			var msg = document.getElementById('lmsg');
			var form = document.getElementById('login');
			var username = form.username.value;
			var password = form.password.value;

			var url = 'LoginInfor/Login.php';

			var postStr = 'username=' + username + '&password=' + password;

			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send(postStr);


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					msg.innerHTML = ajax.responseText;

				}
			}
		});
	}
	//Add plan
	if(page.name === 'add_event'){
		$$('#addEvent_submit').on('click', function (){
			//~ 
			var form = document.getElementById('addevent_form');
			var eventname = form.eventname.value;
			var content = form.content.value;
			var sort = form.select.value;

			myApp.alert(sort);
			//myApp.alert("content: "+ content + "\nusername: " + planname);
			var url = "PlanList/checkEvent.php";

			var postStr = 'eventname=' + eventname + '&content=' + content + '&sort=' + sort;

			//myApp.alert(postStr);
			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send(postStr);


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					myApp.alert(ajax.responseText);
				}
			}

		});
	}
	if (page.name === 'add_plan') {

		//不完善,缺分类
		$$('#addPlan_submit').on('click', function() {

			var form = document.getElementById('addplan_form');
			var planname = form.planname.value;
			var content = form.content.value;

			//myApp.alert("content: "+ content + "\nusername: " + planname);
			var url = "PlanList/checkPlan.php";

			var postStr = 'planname=' + planname + '&content=' + content;

			//myApp.alert(postStr);
			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send(postStr);


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					myApp.alert(ajax.responseText);
				}
			}
		});
	}
	//Preloader page events
	if (page.name === 'preloader') {
		$$('.demo-indicator').on('click', function() {
			myApp.showIndicator();
			setTimeout(function() {
				myApp.hideIndicator();
			}, 2000);
		});
		$$('.demo-preloader').on('click', function() {
			myApp.showPreloader();
			setTimeout(function() {
				myApp.hidePreloader();
			}, 2000);
		});
		$$('.demo-preloader-custom').on('click', function() {
			myApp.showPreloader('My text...');
			setTimeout(function() {
				myApp.hidePreloader();
			}, 2000);
		});
	}
	//Swipe to delete events callback demo
	if (page.name === 'swipe-delete') {
		$$('.demo-remove-callback').on('deleted', function() {
			myApp.alert('Thanks, item removed!');
		});
	}
	// Action sheet, we use it on two pages
	if (page.name === 'swipe-delete' || page.name === 'modals' || page.name === 'media-lists') {
		$$('.demo-actions').on('click', function() {
			myApp.actions([
			// First buttons group
			[
			// Group Label
			{
				text: 'Here comes some optional description or warning for actions below',
				label: true
			},
			// First button
			{
				text: 'Alert',
				onClick: function() {
					myApp.alert('He Hoou!');
				}
			},
			// Another red button
			{
				text: 'Nice Red Button ',
				red: true,
				onClick: function() {
					myApp.alert('You have clicked red button!');
				}
			}, ],
			// Second group
			[{
				text: 'Cancel',
				bold: true
			}]]);
		});
	}
	// Pull To Refresh Demo
	if (page.name === 'pull-to-refresh') {
		// Dummy Content
		var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
		var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
		// Pull to refresh content
		var ptrContent = $$(page.container).find('.pull-to-refresh-content');
		// Add 'refresh' listener on it
		ptrContent.on('refresh', function(e) {
			// Emulate 2s loading
			setTimeout(function() {
				var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
				var song = songs[Math.floor(Math.random() * songs.length)];
				var author = authors[Math.floor(Math.random() * authors.length)];
				var linkHTML = '<li class="item-content">' + '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' + '<div class="item-inner">' + '<div class="item-title-row">' + '<div class="item-title">' + song + '</div>' + '</div>' + '<div class="item-subtitle">' + author + '</div>' + '</div>' + '</li>';
				ptrContent.find('ul').prepend(linkHTML);
				// When loading done, we need to "close" it
				myApp.pullToRefreshDone();
			}, 2000);
		});
	}
	// Sortable toggler
	if (page.name === 'sortable-list') {
		$$('.list-block.sortable').on('open', function() {
			$$('.toggle-sortable').text('Done');
		});
		$$('.list-block.sortable').on('close', function() {
			$$('.toggle-sortable').text('Edit');
		});
	}

	// Infinite Scroll
	if (page.name === 'infinite-scroll') {
		// Loading trigger
		var loading = false;
		// Last loaded index, we need to pass it to script
		var lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
		// Attach 'infinite' event handler
		$$('.infinite-scroll').on('infinite', function() {
			// Exit, if loading in progress
			if (loading) return;
			// Set loading trigger
			loading = true;
			// Request some file with data
			$$.get('infinite-scroll-load.php', {
				leftIndex: lastLoadedIndex + 1
			}, function(data) {
				loading = false;
				if (data === '') {
					// Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
					myApp.detachInfiniteScroll($$('.infinite-scroll'));
				} else {
					// Append loaded elements to list block
					$$('.infinite-scroll .list-block ul').append(data);
					// Update last loaded index
					lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
				}
			});
		});
	}
});

// Required for demo popover
$$('.popover a').on('click', function() {
	myApp.closeModal('.popover');
});

// Change statusbar bg when panel opened/closed
$$('.panel-left').on('open', function() {
	$$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-right').on('open', function() {
	$$('.statusbar-overlay').addClass('with-panel-right');
});
$$('.panel-left, .panel-right').on('close', function() {
	$$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
	document.getElementById("User").innelHTML = document.getElementById("lmsg").innerHTML;
});

$$('.addSort').on('click', function() {
	myApp.prompt('请输入你想添加的分类: ', function(data) {
		// @data contains input value
		myApp.confirm('确定添加分类: ' + data + '?', function() {
			
			var name = data;
			//myApp.alert("content: "+ content + "\nusername: " + planname);
			var url = "PlanList/addSort.php";

			var postStr = 'name=' +name;

			//myApp.alert(postStr);
			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send(postStr);


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					data = ajax.responseText;
					myApp.alert(data);
				}
			}
		});
	});
});

$$('#addSort').on('click', function() {
	myApp.prompt('请输入你想添加的分类: ', function(data) {
		// @data contains input value
		myApp.confirm('确定添加分类: ' + data + '?', function() {
			
			var name = data;
			//myApp.alert("content: "+ content + "\nusername: " + planname);
			var url = "PlanList/addSort.php";

			var postStr = 'name=' +name;

			//myApp.alert(postStr);
			var ajax = false;

			if (window.XMLHttpRequest) {
				ajax = new XMLHttpRequest();
				if (ajax.overrrideMimeType) {
					ajax.overrideMimeType("text/xml");
				}
			} else if (window.ActiveXObject) {
				try {
					ajax = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						ajax = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}

			if (!ajax) { // 异常，创建对象实例失败
				myApp.alert("不能创建XMLHttpRequest对象实例.");
				return false;
			}

			//通过Post方式打开连接
			ajax.open("POST", url, true);


			//定义传输的文件HTTP头信息
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


			//发送POST数据
			ajax.send(postStr);


			//获取执行状态
			ajax.onreadystatechange = function() {
				//如果执行状态成功，那么就把返回信息写到指定的层里
				if (ajax.readyState == 4 && ajax.status == 200) {
					data = ajax.responseText;
					myApp.alert(data);
				}
			}
		});
	});
});


// Generate Content Dynamically
var dynamicPageIndex = 0;

function createContentPage() {
	mainView.loadContent('<!-- Top Navbar-->' + '<div class="navbar">' + '  <div class="navbar-inner">' + '    <div class="left"><a href="#" class="back link">Back</a></div>' + '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' + '  </div>' + '</div>' + '<div class="pages">' + '  <!-- Page, data-page contains page name-->' + '  <div data-page="dynamic-content" class="page">' + '    <!-- Scrollable page content-->' + '    <div class="page-content">' + '      <div class="content-block">' + '        <div class="content-block-inner">' + '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' + '          <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>' + '        </div>' + '      </div>' + '    </div>' + '  </div>' + '</div>');
	return;
}
$$(document).on('click', '.ks-generate-page', createContentPage);
