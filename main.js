const url = "https://www.googleapis.com/books/v1/volumes?q=";
const searchTerms = document.getElementById('searchTerms');
const pageBody = document.getElementById('body');

function searchTitles(){
  body.innerHTML="";
  let request = url+searchTerms.value.split(' ').join('+');
   
  fetch(request)
    .then(response => response.json())
    .then(response => displayTitles(response));
  
}

function displayTitles(books){
  books.items.map(function(i){
    let display = `
    <center>
    <div class="card"><br>
 <center> <img src="${i.volumeInfo.imageLinks.thumbnail}" > </center>
  <div class="container">
    <h5>${i.volumeInfo.title}</h5>
    <p>${i.volumeInfo.authors}</p>
  </div>
</div>
</center>
<br>
`;
    pageBody.innerHTML += display;
  });
}