// SOME É USADO PARA ANALISAR SE PELO MENOS UM ITEM DE UM ARRAY É APROVADO

function isPrime (value) {
    for (let i = 2; i < value; i++){
        if (value % i === 0 ) {
            return false;
        }
    }

    return value > 1;
}

const array = [ 6, 2, 8, 11, 14, 42]

console.log( array.some(isPrime))

// =============================================================

const team = [
    {id: 12, name: 'Harley', pilot: false},
    {id: 44, name: 'Thompsom', pilot: false},
    {id: 59, name: 'Pete', pilot: false}
]

console.log(team.some( person => person.pilot))