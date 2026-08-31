
function Tarefa(){
    var user = window.prompt("Qual seu nome?");
    var nome = user;

    if (nome != ''){
        window.alert("É um prazer te conhecer, " + nome +"!")
    }else{
        window.alert("Ainda não sei seu nome :(")
    }
    
}
