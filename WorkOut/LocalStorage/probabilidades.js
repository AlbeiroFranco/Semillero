let name,
    descripcionProb = [],
    descripcionProb2,
    valoresProb = [],
    valoresProb2,
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
    let storage = JSON.parse(localStorage.getItem('descripcionProb'));
    let storage2 = JSON.parse(localStorage.getItem('valoresProb'));
    let name = document.getElementById('name').value;
    let valor = document.getElementById('valor2').value;
    if (name == '' || valor == '') {
        alert('Completa los Campos')
    }else{
        if (storage == null || storage2 == null) {
            descripcionProb.push(name);
            valoresProb.push(valor);
            localStorage.setItem('descripcionProb', JSON.stringify(descripcionProb));
            localStorage.setItem('valoresProb', JSON.stringify(valoresProb));

        } else{
            descripcionProb = JSON.parse(localStorage.getItem('descripcionProb'));
            descripcionProb.push(name);
            localStorage.setItem('descripcionProb', JSON.stringify(descripcionProb));
            valoresProb = JSON.parse(localStorage.getItem('valoresProb'));
            valoresProb.push(valor);
            localStorage.setItem('valoresProb', JSON.stringify(valoresProb));
            
        }   
    }          
}

function Read() {
        usertr.innerHTML = '';
        descripcionProb2 = JSON.parse(localStorage.getItem('descripcionProb'));
        valoresProb2 = JSON.parse(localStorage.getItem('valoresProb'));
        if (descripcionProb ==null || valoresProb == null) {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">valor</th>
                <th class = "space">Acción</th>
            </tr>
            `
            
        }else {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">valor</th>
                <th class = "space">Acción</th>
            </tr>
            `

            for (let i = 0; i < descripcionProb2.length ; i++) {
                usertr.innerHTML += `
                <tr>
                    <td class = "space">${i+1}</td>
                    <td class = "space">${descripcionProb2[i]}</td>
                    <td class = "space">${valoresProb2[i]}</td>
                    <td class = "space">
                        <button Onclick="Update(${i})"><img src="./design/pen.png"></button>
                        <button Onclick="Delete(${i})"><img src="./design/bin.png"></button>
                    </td>
                    
                </tr>
                `
            }
            
        }
}

function Update(descripcionProb){
    let descripcionProb4 = JSON.parse(localStorage.getItem('descripcionProb'));
    let valoresProb4 = JSON.parse(localStorage.getItem('valoresProb'));
    usertr.innerHTML = '';
    usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">valor</th>
                <th class = "space">Acción</th>
            </tr>
    `
    for(let i = 0; i < descripcionProb4.length; i++){
        if (i == descripcionProb) {
            usertr.innerHTML += `
                <tr>
                <td class = "space"> ${i+1}</td>
                <td class = "space"><input id="newName" placeholder = "${descripcionProb4[i]}"></input></td>
                <td class = "space"><input id="newValoresProb" placeholder = "${valoresProb4[i]}"></input></td>
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
                <td class = "space">${descripcionProb2[i]}</td>
                <td class = "space">${valoresProb2[i]}</td>
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
    let descripcionProb5 = JSON.parse(localStorage.getItem('descripcionProb'));
    let valoresProb5 = JSON.parse(localStorage.getItem('valoresProb'));
    descripcionProb5[i] = document.getElementById('newName').value;
    valoresProb5[i] = document.getElementById('newValoresProb').value;
        if(descripcionProb5[i] == '' || valoresProb5[i] == ''){
            alert('Completa los campos');
        }else{
            localStorage.setItem('descripcionProb', JSON.stringify(descripcionProb5));
            localStorage.setItem('valoresProb', JSON.stringify(valoresProb5));
            Read();
        }
}

function Delete(i) {
    let descripcionProb3 = JSON.parse(localStorage.getItem('descripcionProb'));
    let valoresProb3 = JSON.parse(localStorage.getItem('valoresProb'));

    descripcionProb3.splice(i,1);
    valoresProb3.splice(i,1)
    localStorage.setItem('descripcionProb', JSON.stringify(descripcionProb3))
    localStorage.setItem('valoresProb', JSON.stringify(valoresProb3))
    Read()
}