
axios.all([
    axios.get('https://api.unsplash.com/photos/?client_id=0c324cf5ce135f93aebb8758f0302ab422c769ccc0eeb6f697eb019c0bc3040b'),
    axios.get('https://pokeapi.co/api/v2/item/251/')
  ])
  .then(responseArr => {
    $('#Imgbutton').click(function(){ 
        var value = Math.round(Math.random() * 10)
        const data = responseArr[0].data[value].urls.full;
        $('body').css("background-image", `url(${data})`)
     })

     $('#pokbutton').click(function(){ 
        var value = Math.round(Math.random() * 10)
        // const data = responseArr[0].data[value].urls.full;
        const pokemon = responseArr[1].data.names[value].name
        const image = responseArr[1].data.sprites.default

        $('div').html(`<img src = '${image}'/>`)
        $('div').append(`<h1>${pokemon}</h1>`)

     })
  }); 

