$(document).ready(function(){
	/* 科室分类选项卡 */
	$(".list-cell").each(function(index,item){
		$(item).attr("data-to","sort" + index);
	})
	$(".sortBox").each(function(index,item){
		$(item).attr("id","sort" + index);
	});

	$(".sortBox").hide();
	$(".sortBox:first").show();
	$(".list-cell:first").addClass("sortTab");
	$(".list-cell:first span").addClass("thistab");

	$(".list-cell").click(function(e){
		if(event.target==this){
			var target = e.target;
			var id = $(target).data("to");

			if($(this).hasClass("sortTab")) {
				$(target).removeClass("sortTab");
				$(target).find("span").removeClass("thistab");
				$("#" + id).slideToggle(400);
			}else {
				$(".list-cell").removeClass("sortTab");
				$(".list-cell span").removeClass("thistab");
				$(".sortBox").hide();
				$(target).addClass("sortTab");
				$(target).find("span").addClass("thistab");
				$("#" + id).slideToggle(400);
			}
		}else{
			return false;
		}

	});


	/* 资源首页搜索框tab */
	$(".sortBox li a").each(function(index,item){
		$(item).attr("tab","sortBox-a-selected" + index);
	});
	$(".coding-con").each(function(index,item){
		$(item).attr('id','sortBox-a-selected' + index);
	});
	$.jqtab(".sortBox",".coding-con");


	/* 滚动条 */
    $('.coding-con-first').niceScroll({
        cursorcolor: "#008b67",//滚动条的颜色
        cursoropacitymax: 1, //滚动条的透明度，从0-1
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //滚动条的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径  圆角
        autohidemode: "leave", //是否隐藏滚动条  true的时候默认不显示滚动条，当鼠标经过的时候显示滚动条
        zindex: "auto",//给滚动条设置z-index值
        cursorfixedheight: 29,
        background: '#ccc',
        horizrailenabled: false,
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 }//滚动条的位置
    });

    /* 编码下拉菜单 */
	$(".down-btn").click(function(e){
		$(".down-list-box").slideToggle(200);
		$(document).on("click",function(){
			$(".down-list-box").hide();
		});
		e.stopPropagation(); //停止冒泡事件，点击别处可以收回
	});
	$(".down-list-box a").click(function(){
		var sTxt = $(this).text();
		$("#codeAbout-txt").val(sTxt);
		$(".down-list-box").hide();
	});




});


