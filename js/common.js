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
			$(this).siblings('i').css("background-position","-10px -10px");
			$.dialog.alert({content:"收藏成功!"});
			$(this).text("取消收藏");
			isNotLove = false;
			return false;
		}else{
			$(this).siblings('i').css("background-position","-44px -10px");
			$.dialog.alert({content:"取消收藏!"});
			$(this).text("收藏本学科");
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
	$('.moreTeam a').click(function() {
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
/* 判断ie placeholder */
$(function () {
    //浏览器不支持 placeholder 时才执行
    if (!('placeholder' in document.createElement('input'))) {
        $('[placeholder]').each(function () {
            var $tag = $(this); //当前 input
            var $copy = $tag.clone();   //当前 input 的复制
            if ($copy.val() == "") {
                $copy.css("color", "#999");
                $copy.val($copy.attr('placeholder'));
            }
            $copy.focus(function () {
                if (this.value == $copy.attr('placeholder')) {
                    this.value = '';
                    this.style.color = '#000';
                }
            });
            $copy.blur(function () {
                if (this.value=="") {
                    this.value = $copy.attr('placeholder');
                    $tag.val("");
                    this.style.color = '#999';
                } else {
                    $tag.val(this.value);
                }
            });
            $tag.hide().after($copy.show());    //当前 input 隐藏 ，具有 placeholder 功能js的input显示
        });
    }
});