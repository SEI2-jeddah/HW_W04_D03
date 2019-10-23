
axios({
    method:'get',
    url: 'https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658',
    
    

})
 .then(response => {
     console.log(response);

 })

    
.catch(err => console.log(err))