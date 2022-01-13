// Constantes

const btn = document.getElementById('btn')


//  =======================================================

//Funciones

function cambiarColor(){

    btn.addEventListener('click', function(){
        btn.classList.toggle('rojo')
    })


}

//Llamadas
cambiarColor()