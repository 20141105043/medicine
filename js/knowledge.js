$(document).ready(function(){

	/* 切换选项卡 */
	$("#know-tit li a").each(function(index,item){
    	$(item).attr('tab','tab' + index)
    });

	$("#tab-conbox").children('div').each(function(index,item){
		$(item).attr('id','tab' + index);
	});

    $.jqtab("#know-tit",".know-con");


	/* 跳到指定位置 */
    //遍历，然后添加自定义属性
    $('.scroll ul li').each(function(index,item){
        $(item).attr('data-to','scroll' + index);
    });

    $('.scroll-con').each(function(index,item){
        $(item).attr('id','scroll' + index);
    });

    $('.scroll li').click(function(e){
        var target = e.target;
        var id = $(target).data("to");
        var value = $('#'+id).offset().top;
        var newPos = new Object();
        newPos.top = 40;
        $("html,body").animate({scrollTop:$('#'+id).offset().top-45},{duration:500,easing:"swing"});
    });
   
});