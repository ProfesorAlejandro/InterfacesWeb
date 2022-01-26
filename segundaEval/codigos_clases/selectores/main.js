$(document).ready(function(){

    // SELECTORES

    //SELECTORES DE ETIQUETA

    $('h1').html('Nuevo texto para el h1')

    //SELECTORES DE CLASE

    $('.parrafo').html('nuevo texto para el párrafo 1')

    //SELECTORES DE ID

    $('#parrafo-2').html('nuevo texto para el párrafo 2')

    //SELECTORES DESCENDIENTES

    $('div p').html('Cambiando texto para los párrafos')

    //SELECTORES HIJO
    $('div > p').html('Modificando los hijos del div')

    //SELECTORES MÚLTIPLES

    $('h1,p').html('CAMBIANDO EL TEXTO A LOS PÁRRAFOS Y AL H1')

    //SELECTORE DE PRIMER ELEMENTO
    $('p:first').html('Cambiando el texto del primer párrafo')

    //SELECTORE DE ÚLTIMO ELEMENTO
    $('p:last').html('Cambiando el texto del último párrafo')





})