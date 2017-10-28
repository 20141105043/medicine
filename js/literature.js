$(document).ready(function(){
	/* 滚动条 */
    $('.window-con-right').niceScroll({
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


    /* 弹出框选项卡 */
    $(".window-con-left ul li a").each(function(index,item){
    	$(item).attr('tab','tab' + index)
    });

	$(".window-box").each(function(index,item){
		$(item).attr('id','tab' + index);
	});

    $.jqtab(".window-con-left",".window-box");
});