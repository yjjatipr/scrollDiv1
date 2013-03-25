
/*
* 右侧页面滚动定位效果插件；
* 调用方法：$(document).divScroll();
* made by keimon
* 2013-03-21
*/
;(function($){
   $.fn.extend({
      divScroll:function(options){
	     var opt = {
		    width:'50px',
			height:'50px',
			backgroundColor:'#ddd',
			border:'1px solid #ccc',
			right:'50px',
			bottom:'100px',
			cursor:'pointer',
			position:'fixed',
			distance:10,
			upWord:'顶部',
			downWord:'底部',
			hoverColor:'pink'
		 };
		 var final_opt = $.extend(opt,options);
		 var _bottom2 = opt.bottom;
		 var _bottom1 = parseInt(opt.bottom)+parseInt(opt.height)+opt.distance;
		 var _width = opt.width;
		 var _height = opt.height;
		 var _backgroundColor = opt.backgroundColor;
		 var _border = opt.border;
		 var _right = opt.right;
		 var _cursor = opt.cursor;
		 var _position = opt.position;
		 var _upWord = opt.upWord;
		 var _downWord = opt.downWord;
		 var _hoverColor = opt.hoverColor;
		 
		 var opt1 = {
		    width:_width,
			height:_height,
			backgroundColor:_backgroundColor,
			border:_border,
			right:_right,
			bottom:_bottom1,
			cursor:_cursor,
			position:_position
		 }
		 
		 var opt2 = {
		    width:_width,
			height:_height,
			backgroundColor:_backgroundColor,
			border:_border,
			right:_right,
			bottom:_bottom2,
			cursor:_cursor,
			position:_position,
		 }
		 
		 var div1 = document.createElement('div');
		 var div2 = document.createElement('div');
		 $(div1).css(opt1).html(_upWord);
		 $(div2).css(opt2).html(_downWord);
		 $(document.body).append($(div1));
		 $(document.body).append($(div2));
		 
		 
		 var win_height = $(window).height(); //788 浏览器高度
         var web_height = $(document).height(); //2179 总的页面高度
         var fixDiv1_bottom = parseInt(_bottom2);
   
         //滚动滚动条判断高度是否大于浏览器高度，若大于则显示‘顶部’div；
         $(window).scroll(function(){
		    if($(window).scrollTop()>win_height){
		       $(div1).show();
		    }else{
		       $(div1).css({'background-color':_backgroundColor,'bottom':_bottom1}).hide();
		    }
        })
   
        //点击‘底部’div使页面滚动到底部；
        $(div2).click(function(){
           $('html,body').animate({scrollTop: (web_height-win_height)+'px'},1000); //注意这里用的是$('html,body')
        })
   
        //‘底部’div颜色变化；
       $(div2).hover(function(){
          $(this).css('background-color',_hoverColor);
       },function(){
         $(this).css('background-color',_backgroundColor);
       })
   
      //‘顶部’div的操作；
      $(div1).hover(function(){
         $(this).css('background-color',_hoverColor);
      },function(){
         if(!$(div1).is(':animated')){
	         $(this).css('background-color',_backgroundColor);
	     }
      })
   
      //点击‘顶部’div后，呈现的动画效果；
      $(div1).click(function(){
	      $('html,body').animate({scrollTop: '0px'},1000);
	      $(div1).animate({bottom: (win_height-fixDiv1_bottom)*2-100+'px'},1000);
      })

   }
   })
})(jQuery);
