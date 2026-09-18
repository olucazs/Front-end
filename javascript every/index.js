// O EVERY VERIFICA SE TODOS ELEMENTOS DE UM ARRAY PASSAM EM UM TESTE, ELE RETORNA TRUE OU FALSE

const array = [ 12, 5, 8, 140, 44, 4];

// console.log(array.every( elem => elem > 10));

const idades = [
    {nome: 'Pedro', idade: 19},
    {nome: 'Alison', idade: 16},
    {nome: 'Lucas', idade: 21},
]

// console.log(idades.every( pessoa => pessoa.idade > 18))

const notas = [7, 3, 10, 8];

const aprovados = notas.every((nota) => nota >= 6);

if (aprovados == true){
    console.log('APROVADO')
}else{
    console.log('REPROVADO')
};