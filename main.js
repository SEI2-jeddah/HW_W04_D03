//HW
axios({
    method: 'get',
    url: 'https://yesno.wtf/api'
})
.then((response3) => {
    //yes or no api
    console.log(response3);
    //yes or no
    $('body').append(`<h1>Yes or No randomly</h1>`)
    const answer = response3.data.answer
    $('body').append(`<h3>${answer}</h3>`)
    //status
    const image = response3.data.image
    $('body').append(`<img id="fimg" src='${image}'/>`)
    $('body').append(`<hr>`)

})
.catch((error) => {
    console.log("error")
})
//*********************************************
axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
})
.then((response) => {
    //dogs api
    console.log(response);
    //image
    $('body').append(`<h1>Dogs API</h1>`)
    const image = response.data.message
    $('body').append(`<img id="fimg" src='${image}'/>`)
    
    //status
    const status = response.data.status
    $('body').append(`<h3>Status: ${status}</h3>`)
    $('body').append(`<hr>`)
})
.catch((error) => {
    console.log("error")
})
//*********************************************
axios({
    method: 'get',
    url: 'https://randomfox.ca/floof/'
})
.then((response2) => {
    //dogs api
    console.log(response2);
    //image
    $('body').append(`<h1>RandomFox</h1>`)
    const image = response2.data.image
    $('body').append(`<img id="fimg" src='${image}'/>`)
    $('body').append(`<br>`)
    //status
    const link = response2.data.link
    $('body').append(`<a href="${link}">my link</a>`)
})
.catch((error) => {
    console.log("error")
})
//*********************************************
