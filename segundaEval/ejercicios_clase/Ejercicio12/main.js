//Constantes & variables

const formulario = document.querySelector('form')
const encabezado = document.querySelector('h1')
const caja = document.querySelector('input')

// ===================================================

//Funciones

function inputVerify(){

    formulario.addEventListener('submit', function(e){
        e.preventDefault()

        if(caja.value == ''){
            encabezado.textContent = 'El campo nombre no puede estar vacío'
        }
        else{
            encabezado.textContent = 'El nombre emviado es ' + caja.value
        }
    })
}

inputVerify()