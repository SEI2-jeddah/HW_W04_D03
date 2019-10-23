axios({
    method: 'get',
    url:'https://api.thedogapi.com/v1/images/search'
})

    .then(res => {
        let img = res.data[0].url
        $('body').append(`<img class = "imgStyle" src="${img}"/>`)  
    })

    .catch(err => console.log(err))
