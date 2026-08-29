$(function(){
    $('.btn-add').click(function(){
        var el = '<div class="anotacao-single"><textarea placeholder="Sua nova anotação..."></textarea></div>';
        $('.container-anotacao').append(el);

        var textArea = $('.anotacao-single').last().find('textarea');
        var date = new Date();
        var hora = date.getHours();
        var minute = date.getMinutes();

        var finalTime = hora+":"+minute;
        textArea.html(finalTime);
    })
})