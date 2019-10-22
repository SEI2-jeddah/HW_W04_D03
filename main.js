axios( {
    method : 'get', 
    url : "https://api.jikan.moe/v3/search/anime/?q=Fate/Zero&page=1"
    }).then((res) =>{
        let  index = Math.floor(Math.random() * 49);
         const title = res.data.results[index].title
         const img = res.data.results[index].image_url
        const desc = res.data.results[index].synopsis
        const info = res.data.results[index].url
        console.log(res);
console.log(title);
console.log(info);
 $('div').append(`<img src='${img}'/>`)
 $('div').append(`<h2>${title}</h2>`)
 $('div').append(`<p>${desc}</p>`)
 $('div').append(`<a href= '${info}'> More info</a>`)
    }).catch((err) => {
        console.log(err);
    })

