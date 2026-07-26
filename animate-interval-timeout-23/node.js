function firstAnimate(){
     $('.box1').toggleClass('ativo');
}

function secondAnimate(){
    $('.box2').animate({
        'height':'600px'
    },1000,function(){
        $('.box2').animate({
            'height':'300px'
        },2000);
    })
}

function thirdAnimate(){
    $('.box3').fadeOut(1000, function(){
        $(this).fadeIn(2000);
    });
}