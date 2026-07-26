var frase = 'Olá, mundo!';

var verificar = frase.match(/Olá/);

if(verificar != null){
    $('.container').html('verdade')
}else{
    $('.container').html('falso')
}