$(document).ready(function () {

    // EVENTOS


    //CLICK

        const parrafo = $('p')

        $('#add').click(function () { 
            parrafo.addClass('color-red')
        });
        
        $('#remove').click(function () { 
            parrafo.removeClass('color-red')
        });

        $('#toggle').click(function () { 
            parrafo.toggleClass('color-red')
        });

        // KEYUP

        const input = $('#nombre')
        const contenido = $('.contenido')

        input.keyup(function(){
            // console.log(input.val())

            contenido.html(input.val())

            if(input.val() === ''){
                contenido.html('Estoy esperando...')
            }


        })


        // SUBMIT

        const caja = $('#content')

        $('form').submit( function(e){
            e.preventDefault()
            console.log(caja.val())
        
        })








    
});