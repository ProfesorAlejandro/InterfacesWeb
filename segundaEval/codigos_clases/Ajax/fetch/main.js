const boton = document.getElementById('btn')


boton.addEventListener('click', function(){

    fetch('https://jsonplaceholder.typicode.com/users')
        .then( function(res){
            res.json().then(function(data){
                console.log(data)
            })
        })
})