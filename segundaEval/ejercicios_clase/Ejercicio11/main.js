// CONSTANTES & VARIABLES
const boton = document.querySelector('button')
const parrafo = document.querySelector('p')

// ==================================================


//Funciones

function mostrarOcultar(){
    boton.addEventListener('click', function(){
        parrafo.classList.toggle('display')

        if(parrafo.classList.contains('display')){
            boton.textContent = 'Ver más'
        }
        else{
            boton.textContent = 'Ver menos' 
        }
    })




}

mostrarOcultar()