
$('body').css('background-image', 'url("https://images.unsplash.com/photo-1570087595565-cbac96e73c3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk3MzY0fQ")')

$('.ip').click(function(){
    axios({
    method:'get',
    url:'https://freegeoip.app/json/'

})
.then((Response)=>{
    var city = Response.data.city
    var country = Response.data.country_name
    var ip = Response.data.ip

    $('.address').text(`your info: ${ip} / ${city}, ${country}`)
})
.catch((Response)=>{
    console.log("ip error");
    
})
});

function img(){
     axios({
    method:'get',
    url:'https://api.unsplash.com/photos/random/?client_id=5669f9d6a19532660a81476bdc20343fbea356ee73674f2c985d34ede594fdcf'
})
.then((Response)=>{
    var backImg = Response.data.urls.regular;
   
   $('body').css('background-image', 'url(' + backImg + ')')

})
.catch((Response)=>{
    console.log("img error");
    
})
}

    


$('.randomImg').click(function(){
    img()
   }); 

  $('.joke').click(function(){
    axios({
    method:'get',
    url:'https://official-joke-api.appspot.com/jokes/programming/random'
})
.then((Response)=>{
    var joke = Response.data[0].setup
    var jokeCom =Response.data[0].punchline

   $('.address').text(`${joke} , ${jokeCom}`)

})
.catch((Response)=>{
    console.log("joke error");
    
})
  });


  $('.randomImg').click(function(){
    img()
   }); 


  $('.joke2').click(function(){
    axios({
    method:'get',
    url:'https://official-joke-api.appspot.com/jokes/random/'
})
.then((Response)=>{    
    var joke = Response.data.setup
    var jokeCom =Response.data.punchline

   $('.address').text(`${joke} , ${jokeCom}`)

})
.catch((Response)=>{
    console.log("joke2 error");
    
})
  });



  
  
