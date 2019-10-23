axios({
    method:'get',
    url:'https://api.thecatapi.com/v1/images/search'
})
.then((response)=>{
    $('body').append(`<img class="main-image" src='${response.data[0].url}'/>`);
})
.catch((error)=>console.log(error))
