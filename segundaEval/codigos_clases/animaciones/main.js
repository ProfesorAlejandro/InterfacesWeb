$(document).ready(function () {
    //ANIMACIONES

    const container = $('div')

    container.click(function(){

        container.animate({
            left:'300px',
            width:'400px',
            height:'400px'
        },2000, function(){
            alert('Animación terminada')
        })

    })


});