
Promise.all([
    axios.get('https://pokeapi.co/api/v2/pokemon/3/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/6/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/9/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/150/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/149/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/126/')
]).then(([res1, res2,res3,res4,res5,res6]) => {

    let resArr = [res1, res2,res3,res4,res5,res6]
    for (let i = 0; i < 6; i++) {
        $('body').append(`<div class="card" id='${i}'></div>`)
        $(`#${i}`).append(`<h2>ID :${resArr[i].data.id}</h2>`);
        $(`#${i}`).append(`<h2>${resArr[i].data.name.toUpperCase()}</h2>`);
        $(`#${i}`).append(`<img src='${resArr[i].data.sprites.front_default}'/>`);
        $(`#${i}`).append(`<img src='${resArr[i].data.sprites.back_default}'/>`);
        $(`#${i}`).append(`<h2>Height :${resArr[i].data.height}</h2>`);
        $(`#${i}`).append(`<h2>Weight :${resArr[i].data.weight}</h2>`);
        
    }
    for (let i = 0; i < 6; i++) {
        $('body').append(`<div class="shiny" id='${i+6}'></div>`)
        $(`#${i+6}`).append(`<h2>ID :${resArr[i].data.id}</h2>`);
        $(`#${i+6}`).append(`<h3>SHINY ${resArr[i].data.name.toUpperCase()}</h3>`);
        $(`#${i+6}`).append(`<img src='${resArr[i].data.sprites.front_shiny}'/>`);
        $(`#${i+6}`).append(`<img src='${resArr[i].data.sprites.back_shiny}'/>`);
        $(`#${i+6}`).append(`<h2>Height :${resArr[i].data.height}</h2>`);
        $(`#${i+6}`).append(`<h2>Weight :${resArr[i].data.weight}</h2>`);
        
    }

   

  })
.catch((err) => {
    console.log(err);
    
    
});
  
