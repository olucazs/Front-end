// FIND USADO PRA PROCURAR OU VERIFICAR UM VALOR, E O RETORNO VAI SER DO PRIMEIRO ELEMENTO QUE SATISFAZER O TESTE;

const pizzas = [ 'mussarela' , 'calabresa', 'portuguesa', 'marguerita']

const findPizza = pizzas.find( p => p.startsWith('m'))

console.log(findPizza)

// ===========================================================================

const frutas = [
    {nome: 'jaca', qtd: 2},
    {nome: 'banana', qtd: 0},
    {nome: 'cereja', qtd: 5}
]

const findFruta = frutas.find( fruta => fruta.nome === 'cereja')

console.log(findFruta)