// axios({
//     method:'get',
//     url:'https://api.unsplash.com/photos/?client_id=5669f9d6a19532660a81476bdc20343fbea356ee73674f2c985d34ede594fdcf'
// })
// .then((Response)=>{
//     // console.log(Response);

//     var randomNum = Math.floor(Math.random()*9)
//     var backImg = Response.data[randomNum].urls.regular;
//     // console.log(backImg);
   
//    $('body').css('background-image', 'url(' + backImg + ')')

// })
// .catch()






setInterval(() => {
    var time = moment().format('LTS');
$('.time').text(`${time}`) 

}, 1000);
   





// https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED


axios({
    headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
    url: 'https://api.football-data.org/v2/matches',
    dataType: 'json',
    type: 'GET',
  })
.then(function(response) {
    var matches = response.data.matches
    var matchesObj = matches.map((val,i)=>{

    var competition = response.data.matches[i].competition.name
    var date = response.data.matches[i].utcDate
    // var hours = new Date().getUTCHours(date)
    // var minutes = new Date().getUTCMinutes(date)
    var awayTeam = response.data.matches[i].awayTeam.name
    var homeTeam = response.data.matches[i].homeTeam.name
    
    $('tbody').append(`<tr>` + `<td>${date}</td>` + `<td>${competition}</td>` + `<td>${awayTeam}</td>` + `<td>${homeTeam}</td>` + `</tr>`)
})
var details = response.data
console.log(details);
  });
