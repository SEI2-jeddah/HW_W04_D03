/// time API
$('body').append(`<div class="time1"> ${moment().format('LT')}</div>`)
setInterval(function(){
// $('.time1').text(function(){return moment().format('LT')})
document.querySelector(".time1").innerText=moment().format('LT');
},1000)
let greeting = ""
let timing = moment().format('LT')
let timing2 = timing.slice(timing.length-2,timing.length)

if(timing2 == "AM"){
    greeting="Good Morning, HADA"
}else{
    greeting="Good Afternoon, Hamed"}

$('body').append(`<div class="greet1"> ${greeting}</div>`)


/// quotes API
axios({method:'get',
    url:'https://api.quotable.io/random'})
    .then(response => {
        $('body').append(`<div class="cont1">"${response.data.content}"</div>`)
        $('body').append(`<div class="cont2">${response.data.author}</div>`)
    })
    .catch(err => console.log(err))


/// background API
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

/// weather API
const icons = {
    clear: '☀',
    rain: '️🌧',
    storm: '⛈',
    snow: '🌨',
    mist: '🌫',
    clouds: '☁',
  };
axios({
    method:'get',
    url:'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=e14f577948389cb4191d7341a60fbd8d',

})
.then(response=>{
    var temp=response.data.main.temp;
    var city1=response.data.name;

    var weather=response.data.weather[0].main.toLowerCase();
    var currentIcon=icons[weather];
    $('body').append(`<div class="temp"> ${currentIcon}${temp}° F</div>`)
    $('body').append(`</br>`)
    $('body').append(`</br>`)
    $('body').append(`<div class="temp"> ${city1}</div>`)
    
}
)
.catch(error=>console.log(error))
