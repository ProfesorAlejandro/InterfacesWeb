const boton = document.getElementById('btn')
const tbody = document.getElementById('tbody')


boton.addEventListener('click', function(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', function(data){

        const info = JSON.parse(data.target.response);

        tbody.innerHTML = ''

        for(let i of info){
            tbody.innerHTML+= `
                <tr>
                    <td>${i.name}</td>
                    <td>${i.username}</td>
                    <td>${i.email}</td>
                    <td>${i.phone}</td>
                    <td>${i.address.street} - ${i.address.suite} - ${i.address.city}</td>

                </tr>
            
            `
        }

      
    

    })

    xhr.send()



})
