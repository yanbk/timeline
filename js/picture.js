var ww=$(window).width();
var hh=$(window).height();
var wenjian="";
var groupNum=0;
var picNum=0;
var arr=[
			["不死鸟兽尊","九幽雀","洛璃","洛天神","牧尘","清衍静","上古天地","天荒"],
			["九界战帝","绫清竹","美杜莎","天阵皇","武祖","萧炎","药老","詹台琉璃"],
			["柳天道","摩诃天","魔帝","青衫剑圣","守墓人","吞天邪帝","西天战皇","幽冥天尊"]
		];
$(function(){
	$(".nav").css({"height":97/640*ww+"px"});
	window.onload=function(){
		$(".group1").addClass("group11");
		$(".group2").addClass("group21");
		$(".group3").addClass("group31");
		$(".jr").addClass("jr1");
        $(".xz").addClass("xz1");
	}
	$(".group").click(function(){
		var index=$(this).index();
		console.log(index);
		$(".section2").removeClass("hide").siblings().addClass("hide");
		switch(index){
			case 1:
				wenjian="zhuzai";
				group=0;
				break;
			case 2:
				wenjian="juqing";
				group=1;
				break;
			case 3:
				wenjian="wangxie";
				group=2;
				break;
		}
		for(var i=0;i<8;i++){
			$(".swiper-slide").eq(i).find("img").attr("src","img/person/"+wenjian+"/"+(i+1)+".png");
		}
		$(".name").html(arr[group][picNum]);
		var mySwiper = new Swiper ('.swiper-container', {
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    // speed:1500,
		    onSlideChangeEnd: function(swiper){
		      picNum=swiper.activeIndex;
		      $(".name").html(arr[group][picNum]);
		    }
		});
	});
	$(".make").click(function(){
		$(".section3").removeClass("hide").siblings().addClass("hide");
		console.log(wenjian,picNum);
	});
	$(".again").click(function(){
		$(".section1").removeClass("hide").siblings().addClass("hide");
	});
	$(".shareBtn").click(function(){
		$(".sharePage").show();
	});
	$(".sharePage").click(function(){
		$(".sharePage").hide();
	});
});