$(document).ready(function () {


    function listaUsuarios(){
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/list",
            dataType: "json",
            success: function (response) {
                let info = ''
    
    
                response.forEach( function(data){
    
                    info += `
    
                        <tr>
                            <td>${data.nombre}</td>
                            <td>${data.apellido1} ${data.apellido2}</td>
                            <td>${data.nota}</td>
                            <td>
                                <button id="btn-detalles" alumnoId=${data.id} >DETALLES</button>

                            </td>
                        </tr>
    
                    `
    
                })
    
                $('#tabla').append(info)
                    
            }
        });

    }

    function detallesAlumno(){

        $(document).on('click','#btn-detalles', function(){

            
            
                 let btnDetalles = $(this)
                 let id = $(btnDetalles).attr('alumnoId')

                 $.ajax({
                     type: "GET",
                     url: "http://localhost:8080/api/alumno/"+id,
                     dataType: "json",
                     success: function (response) {

                        alert(response.nombre+' '+ response.apellido1+' '+ response.apellido2+' '+response.nota)

                    
                         
                     }
                 });

            

               

        })







    }


    //Llamadas a funciones
    listaUsuarios()
    detallesAlumno()


    
});