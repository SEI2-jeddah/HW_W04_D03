axios.all([
    axios.get('https://aws.random.cat/meow'),
    axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
  ])
  .then(responseArr => {
    const image = responseArr[0].data.file
    const fact = responseArr[1].data.text
    //this will be executed only when all requests are complete
    // console.log('Date created: ', responseArr[0].data.created_at);
    // console.log('Date created: ', responseArr[1].data.created_at);

    $("body").append(`<img id="randCat" src="${image}" alt="">`)
    $("body").append(`<h4 id="fact">${fact}</h4>`)

  }).catch((error =>{
    console.log(error);
    console.log('nooooooooooo');
    
}))