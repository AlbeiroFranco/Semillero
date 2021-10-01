let name,
    descripcion = [],
    descripcion2,
    valorMinimo = [],
    valorMinimo2,
    valorMaximo = [],
    valorMaximo1,
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
    let storage = JSON.parse(localStorage.getItem('descripcion'));
    let storage2 = JSON.parse(localStorage.getItem('valorMinimo'));
    let storage3 = JSON.parse(localStorage.getItem('valorMaximo'));

    let name = document.getElementById('name').value;
    let valor = document.getElementById('valor2').value;
    let valorMaximoV = document.getElementById('valor3').value;

    if (name == '' || valor == '' || valorMaximoV == '') {
        alert('Completa los Campos')
    }else{
        if (storage == null || storage2 == null || storage3 == null) {
            descripcion.push(name);
            valorMinimo.push(valor);
            valorMaximo.push(valorMaximoV)

            localStorage.setItem('descripcion', JSON.stringify(descripcion));
            localStorage.setItem('valorMinimo', JSON.stringify(valorMinimo));
            localStorage.setItem('valorMaximo', JSON.stringify(valorMaximo));

        } else{
            descripcion = JSON.parse(localStorage.getItem('descripcion'));
            descripcion.push(name);
            localStorage.setItem('descripcion', JSON.stringify(descripcion));

            valorMinimo = JSON.parse(localStorage.getItem('valorMinimo'));
            valorMinimo.push(valor);
            localStorage.setItem('valorMinimo', JSON.stringify(valorMinimo));

            valorMaximo = JSON.parse(localStorage.getItem('valorMaximo'));
            valorMaximo.push(valorMaximoV);
            localStorage.setItem('valorMaximo', JSON.stringify(valorMaximo));


            
        }   
    }          
}

function Read() {
        usertr.innerHTML = '';
        descripcion2 = JSON.parse(localStorage.getItem('descripcion'));
        valorMinimo2 = JSON.parse(localStorage.getItem('valorMinimo'));
        valorMaximo1 = JSON.parse(localStorage.getItem('valorMaximo'));
        

        if (descripcion ==null || valorMinimo == null || valorMaximo == null) {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">Valor Mínimo</th>
                <th class = "space">Valor Máximo</th>
                <th class = "space">Acción</th>
            </tr>
            `
            
        }else {
            usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">Valor Mínimo</th>
                <th class = "space">Valor Máximo</th>
                <th class = "space">Acción</th>
            </tr>
            `

            for (let i = 0; i < descripcion2.length ; i++) {
                usertr.innerHTML += `
                <tr>
                    <td class = "space">${i+1}</td>
                    <td class = "space">${descripcion2[i]}</td>
                    <td class = "space">${valorMinimo2[i]}</td>
                    <td class = "space">${valorMaximo1[i]}</td>
                    <td class = "space">
                        <button Onclick="Update(${i})"><img src="./design/pen.png"></button>
                        <button Onclick="Delete(${i})"><img src="./design/bin.png"></button>
                    </td>
                    
                </tr>
                `
            }
            
        }
}

function Update(descripcion){
    let descripcion4 = JSON.parse(localStorage.getItem('descripcion'));
    let valorMinimo4 = JSON.parse(localStorage.getItem('valorMinimo'));
    let valorMaximoV4 = JSON.parse(localStorage.getItem('valorMaximo'));

    usertr.innerHTML = '';
    usertr.innerHTML += `
            <tr>
                <th class = "space">Codigo</th>
                <th class = "space">Descripción</th>
                <th class = "space">Valor Mínimo</th>
                <th class = "space">Valor Máximo</th>
                <th class = "space">Acción</th>
            </tr>
    `
    for(let i = 0; i < descripcion4.length; i++){
        if (i == descripcion) {
            usertr.innerHTML += `
                <tr>
                <td class = "space"> ${i+1}</td>
                <td class = "space"><input id="newName" placeholder = "${descripcion4[i]}"></input></td>
                <td class = "space"><input id="newvalorMinimo" placeholder = "${valorMinimo4[i]}"></input></td>
                <td class = "space"><input id="newvalorMinimo1" placeholder = "${valorMaximoV4[i]}"></input></td>
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
                <td class = "space">${descripcion2[i]}</td>
                <td class = "space">${valorMinimo2[i]}</td>
                <td class = "space">${valorMaximo1[i]}</td>
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
    let descripcion5 = JSON.parse(localStorage.getItem('descripcion'));
    let valorMinimo5 = JSON.parse(localStorage.getItem('valorMinimo'));
    let valorMaximoV5 = JSON.parse(localStorage.getItem('valorMaximo'));

    descripcion5[i] = document.getElementById('newName').value;
    valorMinimo5[i] = document.getElementById('newvalorMinimo').value;
    valorMaximoV5[i] = document.getElementById('newvalorMinimo1').value;

        if(descripcion5[i] == '' || valorMinimo5[i] == '' || valorMaximoV5[i] == ''){
            alert('Completa los campos');
        }else{
            localStorage.setItem('descripcion', JSON.stringify(descripcion5));  
            localStorage.setItem('valorMinimo', JSON.stringify(valorMinimo5));
            localStorage.setItem('valorMaximo', JSON.stringify(valorMaximoV5));
            Read();
        }
}

function Delete(i) {
    let descripcion3 = JSON.parse(localStorage.getItem('descripcion'));
    let valorMinimo3 = JSON.parse(localStorage.getItem('valorMinimo'));
    let valorMaximoV3 = JSON.parse(localStorage.getItem('valorMaximo'));

    descripcion3.splice(i,1);
    valorMinimo3.splice(i,1)
    valorMaximoV3.splice(i,1)

    localStorage.setItem('descripcion', JSON.stringify(descripcion3))
    localStorage.setItem('valorMinimo', JSON.stringify(valores3))
    localStorage.setItem('valorMaximo', JSON.stringify(valorMaximoV3))
    Read()
}