axios ({
    method: 'get',
    url: 'https://api.unsplash.com/photos/?client_id=49b9e4002dc2eb3547b9316802db40564c2cc6c73595d0080bfb021a6a98a464'
})

.then ((response) => {
const pokemon = response.data.name 
const height = response.data.height
const image = response.data.sprites.front_default 
console.log(response); 
$ ('body').html(`<img src= '${image}' />`)
$ ('body').append(`<h1> '${pokemon}' </h1>`)
$ ('body').append(`<p> '${height}' </p>`)

})

.catch((error) => {

})