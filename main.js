axios({
    method:'get',
    url: 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
})

.then(response=>{
console.log(response)
const d = response.data.description
const t = response.data.title
const r = response.data.producer
const s = response.data.release_date

$('body').append(`<h1 style="color:green;">${t}</h1>`),$('body').append(`<h>producer: ${r}</h>`),$('body').append(`<p>release date:${s}</p>`),$('body').append(`<p>${d}</p>`)


})

.catch({
})