    verificarCliqueFechar();
    abrirJanela();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function verificarCliqueFechar(){
        var el = $('body, .closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        })

        $('.form').click(function(e){
            e.stopPropagation();
        })
    }

$('form').submit(function(){

    var nome = $('input[name=nome]').val();
    var email = $('input[name=email]').val();

    var amount = nome.split(' ').length;
    var splitStr = nome.split(' ');
    if(amount >= 2){
        for(var i = 0; i < amount; i++)
            if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                console.log('Condição bate!')
            }else{
                console.log('Não bate com a condição nome completo!');
                return false;
        }

    }else{
        $('input[name=nome]').css('border','2px solid red');
        $('input[name=nome]').data('invalido','true');
        console.log('Não bate com a condição nome completo!');
        return false;
        }

         return false;
})