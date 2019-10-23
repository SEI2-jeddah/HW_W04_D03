axios({
    method: 'get',
    url:('https://cat-fact.herokuapp.com/facts/'),
    
})
// axios({
//     method: 'get',
//     url: ('https://uselessfacts.jsph.pl/random.json?language=en')
// })
  .then(response => {
      console.log (response)
    let index = Math.floor(Math.random () *20)
    const fact = response.data.all[index].text
console.log(fact);


    $("body").append(`<h4 id="facts">${fact}</h4>`)

  }).catch((error =>{
    console.log(error);
}))