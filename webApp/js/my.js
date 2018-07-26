$(function(){
	$(".have_no").click(function(){
		if ($(this).hasClass("am_active")) {
			$(this).removeClass("am_active");
		}else{
			$(this).addClass("am_active");
		}
	})
	$(".add_remove li").click(function(){
		$(this).addClass("am_active").siblings().removeClass("am_active");
	})
	var subject_number = $(".result>ul>li").length;
	$(".add_remove li").click(function(){
		$(this).addClass("am_active").siblings().removeClass("am_active");
		if ($(".add_remove li.am_active").size() == subject_number) {
			$("#footer_button").removeClass("no");
			$("#footer_button").addClass("have");	
		}
	})
	$("#footer_button a").click(function(){
		$(".popup_box").show();
		if ($(".add_remove li.am_active").size() == subject_number) {
			$("#assessment_nav_yes").show();
			$("#assessment_nav_no").hide();
		}
	})
	$(".popup_box h1 i").click(function(){
		$(".popup_box").hide();
	})
	$(".assessment a,.public_popup a,.password a").click(function(){
		$(".popup_box").hide();
	})
	$(".people_det a").click(function(){
		if ($(this).siblings("p").hasClass("am_active")) {
			$(this).siblings("p").removeClass("am_active");
		}else{
			$(this).siblings("p").addClass("am_active");
		}
	})

// tabs组件
	function Tabs(selector){
		this.elements = $(selector);
		this.init();
		this.bindEvents();
	}
	Tabs.prototype.init = function(){
		this.elements.each(function(index, element){
			$(element).find('.tabs-bar li').eq(0).addClass('am_active');
			$(element).children('.tabs-content').find('.content-item').eq(0).addClass('active');
		})
	}

	Tabs.prototype.bindEvents = function(){
		this.elements.on('click', '.tabs-bar li',function(e){
			var  $li = $(e.currentTarget);
			$li.addClass('am_active').siblings().removeClass('am_active');
			var index = $li.index();
			var $content = $li.closest('.tabs').find('.tabs-content .content-item').eq(index);
			$content.addClass('active').siblings().removeClass('active');
		})
	}
	new Tabs('.lend_det');
})