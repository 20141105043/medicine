$(document).ready(function(){
	/* Header学科下拉菜单 */
	$(".course").hover(function(){
		$(this).find("i").addClass("horn-af").removeClass("horn");
		$(this).find(".course-box").toggleClass("courseShow");
	},function(){
		$(this).find("i").addClass("horn").removeClass("horn-af");
		$(this).find(".course-box").removeClass("courseShow");
	});

	/* nav选择全部下拉菜单 */
	$('#select').on("click",function(e){
		$(".select-box").slideToggle(200);
		$(document).on("click",function(){
			$(".select-box").hide();
		});
		e.stopPropagation(); //停止冒泡事件，点击别处可以收回
	});
	
	$(".select-box ul li").on("click",function(e){
		var sTxt = $(this).children("a").text();
		$("#select").children("a").text(sTxt);
	});

	/* 判断搜索框输入是否为空 */
	$("#search-button").click(function(){
		if($(".search-text").val() == '') {
			alert("请输入内容");
		}
	});

	/* 收藏本学科 */
	var isNotLove = true;
	$('#love').click(function(){
		if(isNotLove){
			$(this).find('i').css("background-position","-10px -10px");
			isNotLove = false;
			return false;
		}else{
			$(this).find('i').css("background-position","-44px -10px");
			isNotLove = true;
			return true;
		}
	});

	/* 心血管内科下拉菜单 */
	$('#inside-tit').hover(function(){
		$('.inside-list').toggleClass('show');
	},function() {
		$('.inside-list').removeClass('show');
	});
	
	/* 返回顶部 */
	$('.go-top').click(function(){
		$('html,body').animate({scrollTop:'0px'},800);
	});

	$(window).scroll(function(){
		var _stop = $(window).scrollTop();
		if(_stop > 20){
			$(".fixed-goTop").fadeIn();
		}else{
			$(".fixed-goTop").fadeOut();
		}
	});

	/* 公用选项卡函数 */
	jQuery.jqtab = function(tabtit,tabcon) {
    	$(tabcon).hide();
    	$(tabtit + " li:first").addClass("thistab").show();
    	$(tabcon + ":first").show();
		$(tabtit + " i:first").css("z-index","0");
    	$(tabtit + " li").click(function(){
    		$(tabtit + " li").removeClass("thistab");
    		$(tabtit + " i").css("z-index","-1");
    		$(this).addClass("thistab");
    		$(tabcon).hide();

    		var activeTab = $(this).find("a").attr("tab");
    		$("#" + activeTab).fadeIn();

    		$(this).find("i").css("z-index","0");
    		return false;
     	});
	}
	
	/* 遮罩层弹出 */
	$('.more a').click(function() {
		$('body').css('position','relative');
		$('.layer').stop(true, true).fadeIn();
		$('.layer .window').stop(true, true).fadeIn();
	});
	$('.close-btn').click(function() {
        $(this).parents('.layer').stop(true, true).fadeOut();
        $('.layer .layer-con').stop(true, true).fadeOut();
        $('.layer .window').stop(true, true).fadeOut();
    });

    $('.coding').click(function() {
		$('body').css('position','relative');
		$('.layer').stop(true, true).fadeIn();
		$('.layer .window').stop(true, true).fadeIn();
	});
	$('.close-btn').click(function() {
        $(this).parents('.layer').stop(true, true).fadeOut();
        $('.layer .layer-con').stop(true, true).fadeOut();
        $('.layer .window').stop(true, true).fadeOut();
    });
});
