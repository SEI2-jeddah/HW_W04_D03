const pokemon = []
for (let i = 1; i < 21; i++) {
    pokemon.push(i+'/')
    
}
console.log(pokemon);
for (let i = 1; i < pokemon.length+1; i++) {
    
axios({
    method: 'get',
    url: "https://pokeapi.co/api/v2/pokemon/"+pokemon[i-1]
})

.then((response)=> {
    
    const pokemon = response.data.name
    const pokemon2 = response.data.types[0].type.name
    const pokemon3 = response.data.types[1].type.name
    const height = response.data.height
    const image = response.data.sprites.front_default
    const image2 = response.data.sprites.back_default
    const image3 = response.data.sprites.front_shiny
    const image4 = response.data.sprites.back_shiny
    console.log(response);
    console.log(pokemon);
    $('body').append(`<h1>${pokemon}</h1>`)
    $('body').append(`<img width='250px' src='${image}'/>`)
    $('body').append(`<img width='250px' src='${image2}'/>`)
    $('body').append(`<img width='250px' src='${image3}'/>`)
    $('body').append(`<img width='250px' src='${image4}'/>`)
    $('body').append(`<h1 class="title">${pokemon}</h1>`)
    $('body').append(`<h2>${pokemon2}</h2>`)
    $('body').append(`<h2>${pokemon3}</h3>`)
    $('body').append(`<p>${height}</p>`) 
})
.catch((error)=>{
})
}

