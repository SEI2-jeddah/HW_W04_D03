
axios({
    method:'get',
    url:  "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658&manga=4199&manga=11608",
    
    

})
 .then(response => {
    const Jinki= response.data.name
    const tv = response.data.type
    const plot  = response.data.type
    const summary = response.data.type
    
     console.log(response);

  $('body').append(`<h1>${'Jinki'}</h1>`)
$('body').append(`<p>${"tv"}</p>`)
$('body').append(`<h2>${'plot summary'}</h2>`)
$('body').append(`<p>${' Aoba is a young girl who loves to build models of robots.  '}</p>`)
  
 })
.catch((error) => {
    console.log(error);

})
