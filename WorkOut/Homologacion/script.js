let ingresar = document.querySelector('#seleccion');
let ingresar2 = document.querySelector('.datosTabla');
let input = document.querySelector('#acceso');
let visual = document.querySelector('.opciones');
let visual2 = document.querySelector('.section2');
let visual3 = document.querySelector('thead');


const res = await fetch("./NivelesDeAceso.json");
const data = await res.json();

document.addEventListener('DOMContentLoaded', cargar())
input.addEventListener('keyup', () => {
    document.removeEventListener('DOMContentLoaded', cargar())
    cargar();
})

function cargar() {
    
    if (input.value == 0) {
        data.forEach(element => {
            let caja = document.createElement('div');
            caja.setAttribute('id', 'caja')
            ingresar.append(caja);
            caja.innerHTML += `
                    <span>${element.Descripcion}</span>
                    <span>${element.Cantidad}</span>
                `
            caja.addEventListener('click', () => {
                ingresar2.innerHTML = '';
                visual.style.opacity = '100';
                visual2.style.background = 'none';
                ingresar2.innerHTML += `
                    <thead>
                    <th></th>
                    <th>Nombre</th>
                    <th>Loggin</th>
                    <th>Homologación</th>
                </thead>
                `
                if ('Acceso Total - Descripción' == element.Descripcion) {
                    fetch('AccesoTotal.JSON')
                        .then(response => response.json())
                        .then(data => {
                            data.forEach(dato => {
                                let ver = dato.Homologacion == null ? '' : 'checked';
                                let ver2 = dato.Homologacion == null ? '' : 'Pendiente';
                                ingresar2.innerHTML += `
            <tr class= "prueba">
                <td><input class = "check" id = "${dato.Id}" type = "checkbox" ${ver}></td>
                <td>${dato.Nombre}</td>
                <td>${dato.Loggin}</td>
                <td>${ver2}</td>
            </tr>
            `
                            });

                            sel = Array.from(document.querySelectorAll('.check'))
                        })
                } else if ("Coordinadora de Calidad" == element.Descripcion) {

                    fetch('CoordinadoraDeCalidad.JSON')
                        .then(response => response.json())
                        .then(data => {
                            data.forEach(dato => {
                                ingresar2.innerHTML += `
            <tr class= "prueba">
                <td><input  type = "checkbox"></td>
                <td>${dato.Nombre}</td>
                <td>${dato.Loggin}</td>
                <td>${dato.Homologacion}</td>
            </tr>
            `
                            });
                            sel = Array.from(document.querySelectorAll('.check'))
                        })

                } else {
                    alert('Campos Vacios');
                }
            })
        });

    } else {

        data.forEach(element => {
            let cuenta = element.Descripcion.substr(0, input.value.length).toLowerCase()
            if (cuenta == input.value.toLowerCase()) {
                ingresar.innerHTML += `
                <div id = "caja">
                    <span>${element.Descripcion}</span>
                    <span>${element.Cantidad}</span>
                </div>
                `
            }
        });
        let prueba = Array.from(document.querySelectorAll('#caja'));
        console.log(prueba)
        prueba.map((pruebax) => {
            pruebax.addEventListener('click', () => {

            })
        })
    }
}

let marcar = document.querySelector('.marcar');
let desmarcar = document.querySelector('.desmarcar');

let sel;

marcar.addEventListener('click', () => marcar1(true));

desmarcar.addEventListener('click', () => marcar1(false));

function marcar1(e) {
    sel.map((el) => {
        el.checked = e;
    })
}








