$(document).ready(() => {
    $('#searchForm').on('submit', (event) => {
      let searchText = $('#searchText').val();
      getMovies(searchText);
      event.preventDefault();
    });
  });
  
  function getMovies(searchText){
    // http://www.omdbapi.com/?s=home&apikey=77bf67a3

    // axios.get('http://www.omdbapi.com/?s=home&apikey=77bf67a3')
    // .then((response) => {
    //   console.log(response);
    // })

    // .catch((err) => {
    //   console.log(err);
    // });
    $.getJSON('http://www.omdbapi.com/?s='+searchText+'&apikey=77bf67a3', function(data) {
     
      console.log(data);
   });
  }

  
