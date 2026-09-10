class Pessoa{
    nome:string

    constructor(nome:string){
        this.nome = nome;
    }
}

var pessoa = new Pessoa("Lucas")
console.log(pessoa.nome)

export{}