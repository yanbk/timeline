(function(){  
    $.fn.imgLoad = function(options){  
        var opts = $.extend({  
            time:4000, ///等待载入时间，如果超过这个时间就直接执行回调  
            callback:function(){} //默认回调  
        }, options);  
        var $this = this,i = 0, j = 0, len = this.length;  
        $(".img_load").each(function(){  
            var _this = this,  
                dateSrc = $(_this).attr("date-src"),  
                imgsrc = dateSrc?dateSrc:_this.src;  
            var img = new Image();  
            img.onload = function(){  
                img.onload = null;  
                _this.src = imgsrc; 
                i++;  
            };  
            img.src = imgsrc; 
        }); 
        var t = window.setInterval(function(){
            if(j<i){
                // $(".loadimg img").attr("src","img/loading/"+j+".jpg"); 
                j++; //console.log(i,j);
            }
            if (j==len || j*200>=opts.time){ 
                window.clearInterval(t);  
                opts.callback();  
            }; 
            //console.log(j*200,opts.time);
            var  p=parseInt(100/len*j);
            $(".loading p").html(p+"%");
        },100);    
    }  
  
})(jQuery);