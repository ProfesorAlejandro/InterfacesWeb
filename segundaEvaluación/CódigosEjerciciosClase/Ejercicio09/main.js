//Constantes

const btnRojo = document.getElementById('btn_rojo')
const btnNaranja = document.getElementById('btn_naranja')
const btnAzul = document.getElementById('btn_azul')

const parrafoUno = document.getElementById('parrafo-1')
const parrafoDos = document.getElementById('parrafo-2')
const parrafoTres = document.getElementById('parrafo-3')

// ================================================================

//Funciones

function rojo(){
    btnRojo.addEventListener('mouseenter', function(){
        parrafoUno.classList.add('rojo')
    })
    btnRojo.addEventListener('mouseleave', function(){
        parrafoUno.classList.remove('rojo')
    })
}

function naranja(){
    btnNaranja.addEventListener('mouseenter', function(){
        parrafoDos.classList.add('naranja')
    })
    btnNaranja.addEventListener('mouseleave', function(){
        parrafoDos.classList.remove('naranja')
    })
}

function azul(){
    btnAzul.addEventListener('mouseenter', function(){
        parrafoTres.classList.add('azul')
    })
    btnAzul.addEventListener('mouseleave', function(){
        parrafoTres.classList.remove('azul')
    })
}




//Llamadas
rojo()
naranja()
azul()