axios({
    method: 'get',
    url: "https://ghibliapi.herokuapp.com/films/"
})
.then((response)=> {
    
        let film1 = response.data[16]
        let film2 = response.data[17]
        let film3 = response.data[18]
        let film4 = response.data[19]

console.log(response);

    $('.film1').append(`${film1.title}<br/>${film1.release_date}<br/>${film1.description} `) 
    $('.film2').append(`${film2.title}<br/>${film2.release_date}<br/>${film2.description} `)
    $('.film3').append(`${film3.title}<br/>${film3.release_date}<br/>${film3.description} `)
    $('.film4').append(`${film4.title}<br/>${film4.release_date}<br/>${film4.description} `)
    
})
.catch()
