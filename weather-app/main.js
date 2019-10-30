const openWeatherKey = "8f7a4e4ad9e7a024000e925002818d71";
const button = document.querySelector('button');
const input = document.getElementById('search-text');
const thisWeather = document.getElementsByClassName('day');


let newDay = new Date();
let day = newDay.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
for (d = 0; d < thisWeather.length; d++, day++) {
    if (day >= 7) {
        day = 0;
    }
    thisWeather[d].innerHTML = days[day];
};

input.addEventListener('keyup', function() {
    if (event.key === "Enter") {
        getTheWeather();
        getBackgroundImg();
    }
})

button.addEventListener("click", getTheWeather);
async function getTheWeather(e) {
    let cities = input.value;
    let api = `https://api.openweathermap.org/data/2.5/forecast/?q=${cities}&units=metric&APPID=${openWeatherKey}&unit=metrics`

    let response = await axios.get(api);
    let tempOne = document.getElementById('frstTemp');
    let tempTwo = document.getElementById('scndTemp');
    let tempThree = document.getElementById('thrdTemp');
    let tempFour = document.getElementById('frthTemp');
    let tempFive = document.getElementById('ffthTemp');

    tempOne.innerHTML = response.data.list[0].main.temp_max + '°';
    tempTwo.innerHTML = response.data.list[8].main.temp_max + '°';
    tempThree.innerHTML = response.data.list[16].main.temp_max + '°';
    tempFour.innerHTML = response.data.list[24].main.temp_max + '°';
    tempFive.innerHTML = response.data.list[32].main.temp_max + '°';
    getBackgroundImg();
}
getTheWeather();

button.addEventListener("click", getBackgroundImg);

async function getBackgroundImg(e) {
    let cities = input.value
    let apiBackGround = `https://api.unsplash.com/search/photos?client_id=c33d91e9935e3e5c864b2085bb5f3b5dde903f614df8ccc7c2bb9720d43b1a38&page=1&query=${cities}`;
    let letBackGround = await axios.get(apiBackGround);
    let background = letBackGround.data.results[Math.floor(Math.random() * 10)].urls.full
    document.body.style.backgroundImage = `url('${background}')`;
    document.body.style.backgroundAttachment = 'fixed';
}

getBackgroundImg();
