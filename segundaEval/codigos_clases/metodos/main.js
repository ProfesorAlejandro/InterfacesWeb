$(document).ready(function () {


    //MÉTODOS DE JQUERY

    //AÑADIR UN ELEMENTO AL FINAL

    $('#p-2').append('<h2>Es es un h2 añadido después del segundo párrafo</h2>')


    //AÑADIR UN ELEMENTO AL PRINCIPIO

    $('#p-2').prepend('<h2>Es es un h2 añadido antes del segundo párrafo</h2>')

    //ELIMINAR ELEMENTOS

    // $('h1').remove()

    //OCULTAR ELEMENTOS
    // $('h1').hide()

    //AÑADIR CLASES
    $('h1').addClass('color-red')

    //AÑADIR CSS
    $('h1').css({'color':'yellow', 'background':'blue'})

    //MODIFCAR ATRIBUTOS

    $('a').attr('href','https://www.amazon.es')







    
});