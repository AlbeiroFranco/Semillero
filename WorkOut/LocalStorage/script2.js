let name,
    names = [],
    names2,
    valores = [],
    valores2,
    usertr = document.getElementById('nameTR');

let mostrar = document.querySelector('.nuevo');
let formulario = document.querySelector('#form')

mostrar.addEventListener('click', () =>{
    formulario.style.display = 'block';
})

document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById('form').reset();

});

 function Create() {
    let storage = JSON.parse(localStorage.getItem('names'));
    let storage2 = JSON.parse(localStorage.getItem('valores'));
    let name = document.getElementById('name').value;
    let valor = document.getElementById('valor2').value;
    if (name == '' || valor == '') {
        alert('Completa los Campos')
    }else{
        if (storage == null || storage2 == null) {
            names.push(name);
            valores.push(valor);
            localStorage.setItem('names', JSON.stringify(names));
            localStorage.setItem('valores', JSON.stringify(valores));

        } else{
            names = JSON.parse(localStorage.getItem('names'));
            names.push(name);
            localStorage.setItem('names', JSON.stringify(names));
            valores = JSON.parse(localStorage.getItem('valores'));
            valores.push(valor);
            localStorage.setItem('valores', JSON.stringify(valores));
            
        }   
    }          
}

function Read() {
        usertr.innerHTML = '';
        names2 = JSON.parse(localStorage.getItem('names'));
        valores2 = JSON.parse(localStorage.getItem('valores'));
        if (names ==null || valores == null) {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">valor</th>
                <th class = "space">Accion</th>
            </tr>
            `
            
        }else {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">valor</th>
                <th class = "space">Accion</th>
            </tr>
            `

            for (let i = 0; i < names2.length ; i++) {
                usertr.innerHTML += `
                <tr>
                    <td class = "space">${i+1}</td>
                    <td class = "space">${names2[i]}</td>
                    <td class = "space">${valores2[i]}</td>
                    <td class = "space">
                        <button Onclick="Update(${i})"><img src="./design/pen.png"></button>
                        <button Onclick="Delete(${i})"><img src="./design/bin.png"></button>
                    </td>
                    
                </tr>
                `
            }
            
        }
}

function Update(names){
    let names4 = JSON.parse(localStorage.getItem('names'));
    let valores4 = JSON.parse(localStorage.getItem('valores'));
    usertr.innerHTML = '';
    usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">valor</th>
                <th class = "space">Accion</th>
            </tr>
    `
    for(let i = 0; i < names4.length; i++){
        if (i == names) {
            usertr.innerHTML += `
                <tr>
                <td class = "space"> ${i+1}</td>
                <td class = "space"><input id="newName" placeholder = "${names4[i]}"></input></td>
                <td class = "space"><input id="newValores" placeholder = "${valores4[i]}"></input></td>
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
                <td class = "space">${names2[i]}</td>
                <td class = "space">${valores2[i]}</td>
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
    let names5 = JSON.parse(localStorage.getItem('names'));
    let valores5 = JSON.parse(localStorage.getItem('valores'));
    names5[i] = document.getElementById('newName').value;
    valores5[i] = document.getElementById('newValores').value;
        if(names5[i] == '' || valores5[i] == ''){
            alert('Completa los campos');
        }else{
            localStorage.setItem('names', JSON.stringify(names5));
            localStorage.setItem('valores', JSON.stringify(valores5));
            Read();
        }
}

function Delete(i) {
    let names3 = JSON.parse(localStorage.getItem('names'));
    let valores3 = JSON.parse(localStorage.getItem('valores'));

    names3.splice(i,1);
    valores3.splice(i,1)
    localStorage.setItem('names', JSON.stringify(names3))
    localStorage.setItem('valores', JSON.stringify(valores3))
    Read()
}