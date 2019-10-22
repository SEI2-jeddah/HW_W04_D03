

axios({

  method:'get',
  url:'https://dog.ceo/api/breeds/image/random'

})

.then((response) => {


  const dogImg = response.data.message
  
  

  document.getElementById('dogsImg').src = dogImg;

  console.log(response);




})

.catch((error) => {

console.error("Somthing wrong I can feel it");

})
