async function getPeople(){
    const response = await fetch ('https://randomuser.me/api/?results=10')
    return response.json()
}

// getPeople().then(data => console.log( data ))

// Somente mulheres
getPeople().then(data =>{
    const woman = data.results
//  console.log( woman.filter( p => p.gender === 'female'))
})

// Trabalhando com dados

getPeople().then(data =>{
    const result = data.results.filter( p => p.dob.age >= 35)
    const people = []

    for ( let p of result ) {
        people.push( {
            'nome' : `${ p.name.first } ${ p.name.last}`,
            'sexo' : `${ p.gender}`,
            'idade': `${ p.dob.age }`,
        } )
    }

    console.table( people )
})