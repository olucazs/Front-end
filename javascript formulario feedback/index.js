$( function(){
    $('form').submit(function(){
        
        var erro = false;
        var nome = $('[name=nome]').val();
        var email = $('[name=email]').val();
        var senha = $('[name=senha]').val();

        if(nome == ''){
            var erro = true;
            var el = $('[name=nome]');
            el.parent().find('.span1').html('Por favor informe o seu nome!');
            el.css('border','2px solid red');
        }

        if(email == ''){
            erro = true;
            var el = $('[name=email]');
            el.parent().find('.span2').html('Por favor informe o seu email!');
            el.css('border','2px solid red');
        }

        if(senha == ''){
            erro = true;
            var el = $('[name=senha]');
            el.parent().find('.span3').html('Por favor crie uma senha!');
            el.css('border','2px solid red');
        }

        if(erro == false){
            $('.box-sucesso').fadeIn(function(){
                setTimeout(() => {
                    $('.box-sucesso').fadeOut();
                }, 2000);
            });
            $(this)[0].reset();
        }

        return false;
    })

    function resetForm(){
        $('input[type=text],textarea').css('border','1px solid black');
        $('span').html('');
    }

})