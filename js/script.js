$(function(){
 


    $(".modal .modal-bottom").hide();
    $(".modal .modal-top").on("click", function() {

        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle();
       /*矢印のアイコンを回転*/
        $(this).toggleClass('active');

    });


    $(".flow-sp .inner .flowbox .fbcontent").hide();
    $(".flow-sp .inner .flowbox .fbimg").on("click", function() {

        /*クリックでコンテンツを開閉*/
        $(this).next().slideToggle();
        /*矢印のアイコンを隠す*/
        $(this).toggleClass('active2');

    });



   });