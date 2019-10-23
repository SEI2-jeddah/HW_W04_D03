//2MrY9wNU7CQNTNh8ee6LRj9UnV6CCWj0
axios({
    method: 'get',
    url: 'https://api.giphy.com/v1/gifs/trending?api_key=2MrY9wNU7CQNTNh8ee6LRj9UnV6CCWj0&limit=25&rating=G'
    // url: 'http://api.giphy.com/v1/gifs/trending&api_key:2MrY9wNU7CQNTNh8ee6LRj9UnV6CCWj0'
})
.then(response=>{
    console.log(response);
    
    let data = response.data.data
    console.log(data);
    
    for(gif of data){
        var image = gif.embed_url
        console.log(image);
        
        $('.contain').append(`<iframe src="${image}" </iframe>`)
    }
    
    // console.log(data);
    
})
.catch(error=>{
console.log(error);

})