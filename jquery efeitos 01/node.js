$(function(){

    /*
    $('.box1').fadeOut(3000, function(){
        $('.box2').fadeIn(2000)
    });
    */

    $('.box1').click(function(){
        $('.box2').slideToggle();
    })
})