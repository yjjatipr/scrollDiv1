
/*
* �Ҳ�ҳ�������λЧ�������
* ���÷�����$(document).divScroll();
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
			upWord:'����',
			downWord:'�ײ�',
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
		 
		 
		 var win_height = $(window).height(); //788 ������߶�
         var web_height = $(document).height(); //2179 �ܵ�ҳ��߶�
         var fixDiv1_bottom = parseInt(_bottom2);
   
         //�����������жϸ߶��Ƿ����������߶ȣ�����������ʾ��������div��
         $(window).scroll(function(){
		    if($(window).scrollTop()>win_height){
		       $(div1).show();
		    }else{
		       $(div1).css({'background-color':_backgroundColor,'bottom':_bottom1}).hide();
		    }
        })
   
        //������ײ���divʹҳ��������ײ���
        $(div2).click(function(){
           $('html,body').animate({scrollTop: (web_height-win_height)+'px'},1000); //ע�������õ���$('html,body')
        })
   
        //���ײ���div��ɫ�仯��
       $(div2).hover(function(){
          $(this).css('background-color',_hoverColor);
       },function(){
         $(this).css('background-color',_backgroundColor);
       })
   
      //��������div�Ĳ�����
      $(div1).hover(function(){
         $(this).css('background-color',_hoverColor);
      },function(){
         if(!$(div1).is(':animated')){
	         $(this).css('background-color',_backgroundColor);
	     }
      })
   
      //�����������div�󣬳��ֵĶ���Ч����
      $(div1).click(function(){
	      $('html,body').animate({scrollTop: '0px'},1000);
	      $(div1).animate({bottom: (win_height-fixDiv1_bottom)*2-100+'px'},1000);
      })

   }
   })
})(jQuery);
