let name,
    riesgo = [],
    riesgo2,
    interno = [],
    interno2,
    usertr = document.getElementById('nameTR');

let mostrar = document.querySelector('.nuevo');
let formulario = document.querySelector('#form')
let ocultar = document.querySelector('.x')

mostrar.addEventListener('click', () =>{
    formulario.classList.toggle('mostrar');
})

ocultar.addEventListener('click', () =>{
    formulario.classList.remove('mostrar')
})



document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById('form').reset();

});

 function Create() {
    let storage = JSON.parse(localStorage.getItem('riesgo'));
    let storage2 = JSON.parse(localStorage.getItem('interno'));
    let riesgos = document.getElementById('riesgos').value;
    let valor = document.getElementById('valor2').value;
    if (riesgos == '' || valor == '') {
        alert('Completa los Campos')
    }else{
        if (storage == null || storage2 == null) {
            riesgo.push(riesgos);
            interno.push(valor);
            localStorage.setItem('riesgo', JSON.stringify(riesgo));
            localStorage.setItem('interno', JSON.stringify(interno));

        } else{
            riesgo = JSON.parse(localStorage.getItem('riesgo'));
            riesgo.push(riesgos);
            localStorage.setItem('riesgo', JSON.stringify(riesgo));
            interno = JSON.parse(localStorage.getItem('interno'));
            interno.push(valor);
            localStorage.setItem('interno', JSON.stringify(interno));
            
        }   
    }          
}

function Read() {
        usertr.innerHTML = '';
        riesgo2 = JSON.parse(localStorage.getItem('riesgo'));
        interno2 = JSON.parse(localStorage.getItem('interno'));
        if (riesgo ==null || interno == null) {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">Interno</th>
                <th class = "space">Acción</th>
            </tr>
            `
            
        }else {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">Interno</th>
                <th class = "space">Acción</th>
            </tr>
            `

            for (let i = 0; i < riesgo2.length ; i++) {
                usertr.innerHTML += `
                <tr>
                    <td class = "space">${i+1}</td>
                    <td class = "space">${riesgo2[i]}</td>
                    <td class = "space">${interno2[i]}</td>
                    <td class = "space">
                        <button Onclick="Update(${i})"><img src="./design/pen.png"></button>
                        <button Onclick="Delete(${i})"><img src="./design/bin.png"></button>
                    </td>
                    
                </tr>
                `
            }
            
        }
}

function Update(riesgo){
    let riesgo4 = JSON.parse(localStorage.getItem('riesgo'));
    let interno4 = JSON.parse(localStorage.getItem('interno'));
    usertr.innerHTML = '';
    usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">Interno</th>
                <th class = "space">Acción</th>
            </tr>
    `
    for(let i = 0; i < riesgo4.length; i++){
        if (i == riesgo) {
            usertr.innerHTML += `
                <tr>
                <td class = "space"> ${i+1}</td>
                <td class = "space"><input id="newriesgos" placeholder = "${riesgo4[i]}"></input></td>
                <td class = "space"><input id="newinterno" placeholder = "${interno4[i]}"></input></td>
                <td class = "space">
                        <button Onclick="Update2(${i})">Actualizar</button>
                        <button Onclick="Read()">Cancelar</button>
                    </td>
                </tr>
            `
            
        }else{
            usertr.innerHTML += `
            <tr>
                <td class = "space">${i+1}</td>
                <td class = "space">${riesgo2[i]}</td>
                <td class = "space">${interno2[i]}</td>
                <td class = "space">
                    <button Onclick="Update(${i})">Editar</button>
                    <button Onclick="Delete(${i})">Eliminar</button>
                </td>
                
            </tr>
            `
        }
    }
}

function Update2(i) {
    let riesgo5 = JSON.parse(localStorage.getItem('riesgo'));
    let interno5 = JSON.parse(localStorage.getItem('interno'));
    riesgo5[i] = document.getElementById('newriesgos').value;
    interno5[i] = document.getElementById('newinterno').value;
        if(riesgo5[i] == '' || interno5[i] == ''){
            alert('Completa los campos');
        }else{
            localStorage.setItem('riesgo', JSON.stringify(riesgo5));
            localStorage.setItem('interno', JSON.stringify(interno5));
            Read();
        }
}

function Delete(i) {
    let riesgo3 = JSON.parse(localStorage.getItem('riesgo'));
    let interno3 = JSON.parse(localStorage.getItem('interno'));

    riesgo3.splice(i,1);
    interno3.splice(i,1)
    localStorage.setItem('riesgo', JSON.stringify(riesgo3))
    localStorage.setItem('interno', JSON.stringify(interno3))
    Read()
}