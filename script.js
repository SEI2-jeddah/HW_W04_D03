axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        var rm = response.data.results[1]
        console.log(rm);
        var image= []
        var gender= []
        var name= []
        let arr = response.data.results.map( ele => {
            image.push(ele.image)
            name.push(ele.name)
            gender.push(ele.gender)

            console.log(ele.name);   
            console.log(ele.gender);
            console.log(ele.image);
        })
        console.log(image);
        console.log(name);
        console.log(gender);
        $(document).ready(function () {
            for (let i = 0; i < image.length; i++) {
                $('body').append(`<img src="${image[i]}" />`)
                $('body').append(`<h2>${name[i]}</h2>`)
                $('body').append(`<h2>${gender[i]}</h2>`)   
            }
        });
    })
    .catch(function (error) {
    });
