axios({
    method:'get',

    url: 'https://api.unsplash.com/photos/?client_id=e70c070d9b5a14060291763071d1bcf15beb82c92a4a07dcd1d209ada890efe4' 

})
.then(response => {

    let randomNum = Math.floor(Math.random()*10)
    let img = response.data[randomNum].urls.regular

    $('body').css('background-image', `url("${img}")`);
    $('body').css('background-size', `cover`);
}
    )
.catch(err => console.log(err))
