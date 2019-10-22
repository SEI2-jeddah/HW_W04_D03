axios ({
    method: 'get',
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=76455507bd3745ccb6e56417a6272315"
})
.then((response)=>{
  
   let x=response.data.articles[0].content;
   let imge=response.data.articles[0].urlToImage
   let title=response.data.articles[0].title
   let content=response.data.articles[0].content
   let date=response.data.articles[0].publishedAt
    console.log(response);
  
  
  
    $('.container').append(`<img id="main-article-image" src='${imge}' />`)
    
    $('.container').prepend(`<h3 class="h33">${title} </h3>` )
    $('#article-summary').append(`<p>${content} </p>` )
    $('.date1').append(`${date} ` )
    for(let i=1;i<3;i++)
    {
        let imge1=response.data.articles[i].urlToImage
        let title1=response.data.articles[i].title
        let date1=response.data.articles[i].publishedAt

    $('#watch-listen').append(`<img class="article-side-image" src='${imge1}' />`)
    $('.article-side-image').after(`<p class="watch-listen-link">${title1} </p>` )
    $('.watch-listen-link').after(`<span class="date">${date1} </span>` )
  
    
    }
   
   
})
.catch((error)=>{ 
    console.log("ERRRRROR")
})
