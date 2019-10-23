
axios({
    method:'get',

    url:'http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe'
})
  .then(responseArr => {
 
    const jokee = responseArr.data.value.joke
    console.log(responseArr)
    $("body").append(`<h4 id="jokee">${jokee}</h4>`)

  }).catch((error =>{
    console.log(error);


})) 
