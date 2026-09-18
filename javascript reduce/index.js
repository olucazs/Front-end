// REDUCE É USADO PARA PERCORRER TODOS ITENS DO ARRAY E REDUZIR A UM UNICO VALOR

const carrinho = [
    {nome: 'camiseta', preço: 50, qtd: 2},
    {nome: 'shorts', preço: 70, qtd: 2},
    {nome: 'polo', preço: 100, qtd: 1}
];

const total = carrinho.reduce((acomulado, item) => acomulado + item.preço * item.qtd, 0);

console.log(total);

// ================================================================

const filmes = [
    {titulo: 'Matrix', genero: 'Ficção'},
    {titulo: 'Alien', genero: 'Ficção'},
    {titulo: 'Titanic', genero: 'Romance'},
]

const porGenero = filmes.reduce((acc,filme) => {
    if (!acc[filme.genero]){
        acc[filme.genero] = [];
    }
    acc[filme.genero].push(filme.titulo);
    return acc;
}, {});

console.log(porGenero);

const foguetes = [
    {country: 'USA', launches: 14},
    {country: 'RUS', launches: 31},
    {country: 'JAP', launches: 7},
    {country: 'EUR', launches: 3},
]

const totalLaunches = foguetes.reduce((prevVal, elem) => prevVal + elem.launches, 0);
console.log(totalLaunches);