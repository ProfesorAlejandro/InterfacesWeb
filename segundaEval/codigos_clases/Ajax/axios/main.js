const boton = document.getElementById('btn')


boton.addEventListener('click', function(){

    axios({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/user'
    }).then(function(res){
        console.log(res.data)
    }).catch(function(err){
        console.log('ERROR EN LA PETICIÓN AL SERVIDOR')
    })

})