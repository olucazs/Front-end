const senhas = ['minhasenha', '1234', 'senha1234']

const requisito = senhas.every(senha => senha.length >= 8)

if (requisito == false){
    console.log('A senha precisa ter mais de 8 caracteres')
}else{
    console.log('As senhas tem mais de 8 caracteres')
}

//-=====================================================

const produtos = [
    {nome: 'mouse', qtd: 10},
    {nome: 'teclado', qtd: 5},
    {nome: 'monitor', qtd: 0},
]

const estoque = produtos.every(( produto => produto.qtd > 0))

if (estoque == true){
    console.log('Os items do seu carrinho estão disponiveis para compra :)');
}else{
    console.log('Algum item do seu carrinho está em falta :(')
}

//====================================================================

const idades = [18, 25, 30, 12];

const sum = idades.reduce((acc, idade) => acc + idade)

console.log(sum)

//===================================================================

const valores = [12, 45, 7, 89, 23, 101];

const maior = valores.reduce((acc, n) => {
    if ( n > acc){
        return n;
    }else{
        return acc;
    }
}, valores[0])

console.log(maior)

// ==============================================================================

const alunos = [
    {nome: 'Ana', nota: 8},
    {nome: 'Bruno', nota: 8},
    {nome: 'Pedro', nota: 9}
]

const aprovados = alunos.every( notas => notas.nota >= 6)
const soma = alunos.reduce(( acc, aluno) => acc + aluno.nota, 0)
const media = soma / alunos.length;

console.log(aprovados ? 'Aprovados' : 'Nem todos aprovados')
console.log(media.toFixed(2))