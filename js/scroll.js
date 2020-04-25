$(function(){


    //aボタンで移動させる
      $('a').click(function() {
          var id = $(this).attr('href');
          var position = $(id).offset().top;
  
          $('html,body').animate({scrollTop:position},1000);
    });
  

    // topへ戻る
      $('.top-imgs').click(function() {
         $('html,body').animate({scrollTop:0},1000);
      });


    // topへ戻るをフローティングアイテムに
       jQuery(window).on("scroll", function($) {
           if (jQuery(this).scrollTop() > 100) {
       jQuery('.top-imgs').show();
           } else {
       jQuery('.top-imgs').hide();
           }
     });
 
       jQuery('.top-imgs').click(function () {
       jQuery('body,html').animate({
            scrollTop: 0
         }, 1000);
       return false;
     });

   });