var ww=$(window).width();
var hh=$(window).height();
var listnum=0;
var is_go=1;
var is_bottom=0;
var _h;
$(function(){
    window.addEventListener("touchstart",function(e){if(is_go == 1) {
        e.preventDefault();e.stopPropagation();
    }},false);
    window.addEventListener("touchmove",function(e){if(is_go == 1) {
        e.preventDefault();e.stopPropagation();
    }},false);
    $(".nav").css({"height":97/640*ww+"px"});
    var len=$(".timeline li").length;
    window.onload=function(){
        $(".img_load").imgLoad({  
                time:40000,//设置足够大 须等待图片载入完成，但是404的时候就杯具了...  
                callback:function(){
                    _h=$(".wrap").height();
                    $("html,body").animate({"scroll-top":_h+"px"},1).show(function(){$(".loading").hide();});
                    load(); 
                }  
        }); 
    }
    var fullyear=1;
    function load(){
        if(_h<=hh){
            window.location.reload();
        }else{
            is_bottom=1;
        }
        $(".logo").animate({"top":"0"},1000);
        $("html,body").delay(2000).animate({"scroll-top":"0px"},10000).show(function(){
            is_go=0;
            $(".jr").addClass("jr1");
            $(".xz").addClass("xz1");
            setInterval(function(){
                $(".fullyear").attr("src","img/fullyear/"+fullyear+".png");
                fullyear++;
                if(fullyear>17){
                    fullyear=1;
                }
            },100)
        });
        $(window).scroll(function(){
            var scroll=$(window).scrollTop();
            console.log(_h,scroll,_h-hh-900)
            if(is_bottom==1){
                if(scroll<_h-hh-900){
                    $(".timeline li").eq(0).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(0).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(0).find(".li_r").addClass("li_r1");
                }else if(scroll<_h-hh-750){
                    $(".timeline li").eq(1).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(1).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(1).find(".li_r").addClass("li_r1");
                }else if(scroll<_h-hh-600){
                    $(".timeline li").eq(2).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(2).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(2).find(".li_r").addClass("li_r1");
                }else if(scroll<_h-hh-450){
                    $(".timeline li").eq(3).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(3).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(3).find(".li_r").addClass("li_r1");
                }else if(scroll<_h-hh-250){
                    $(".timeline li").eq(4).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(4).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(4).find(".li_r").addClass("li_r1");
                }else if(scroll<_h-hh-100){
                    $(".timeline li").eq(5).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(5).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(5).find(".li_r").addClass("li_r1");
                }else if(scroll<_h-hh){
                    $(".timeline li").eq(6).find(".li_l").addClass("li_l1");
                    $(".timeline li").eq(6).find(".dotimg").addClass("dotimg1");
                    $(".timeline li").eq(6).find(".li_r").addClass("li_r1");
                } 
            }
            
        })
    }
});