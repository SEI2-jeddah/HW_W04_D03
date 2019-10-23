axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  })
 .then(response => {
    // console.log(response)
    $('body').append(`<img src='${response.data.message}'/>`)
 })
 .catch(error => {});