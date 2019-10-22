// axios({
//     method : 'get', 
//     url : "https://breakingbadapi.com/api/characters"
//     }).then((res) =>{
//   $('body').append(`<div class = gridItem></div>`)
    
//        let data= res.data;

//        for(let i =0;i<5;i++){
//         $('body').append(`<div class = gridItem></div>`)
//         $('.gridItem').append(`<img src=${data[i].img}/>`)
//        }
//     })
//     .catch((err) => {
//       console.log(err) 
//     })

axios({
    method : 'get', 
    url : "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=M9KI9E2hiYt6Mz7ju3LC3Du9MU4dGMEY"
}).then((res)=>{
    console.log(res)
   
           let data= res.data.results.books;
         $('body').append(`<header> New York Beast Seller for ${res.data.results.bestsellers_date}</header>`)

var cont = $('<div></div>')
cont.addClass('cont')
           for(let i =0;i<15;i++){
           var div= $('<div></div>')
           div.addClass('items')
           div.append(`<img class='img' width = ${data[i].book_image_width-200} hight= ${data[i].book_image_height-200} src=${data[i].book_image} />`)
            div.append(`<p> Author: ${data[i].author}</P>`)
            div.append(`<p> ${data[i].description}</P>`)
            div.append(`<a href="${data[i].amazon_product_url}"> Buy on Amazon </a>`)
            cont.append(div)
           }
           $('body').append(cont)
           
}).catch((res)=>{
console.log(res)
})
