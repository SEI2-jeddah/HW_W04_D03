axios.get('https://aws.random.cat/meow')
    .then((response) => {
        var x = response.data.file
        $(document).ready(function () {
            $("#my_image").attr("src", x);
        });
    })
    .catch(function (error) {
    });

