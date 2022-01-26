$(document).ready(function () {

    const btnOcultar = $('#ocultar')
    const btnMostrar = $('#mostrar')
    const btnToggle = $('#toggle')

    const elemento = $('#elemento')

    // HIDE, SHOW TOGGLE

    // btnOcultar.click(function(){
    //     elemento.hide(2000)
    // })

    // btnMostrar.click(function(){
    //     elemento.show(3000)
    // })

    // btnToggle.click(function(){
    //     elemento.toggle(3000)
    // })

     // FADE IN, FADE OUT Y FADE TOGGLE
     btnOcultar.click(function(){
         elemento.fadeOut(3000);

     })

     btnMostrar.click(function(){
        elemento.fadeIn(3000);

    })

    btnToggle.click(function(){
        elemento.fadeToggle(3000);

    })



    
});