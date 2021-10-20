let ingresarMoneda = document.querySelector('#moneda');
let ingresar = document.querySelector('.tabla');
let boton = document.querySelector('.boton');
let back = document.querySelector('.ordenes');
let articulo = document.querySelector('.articulo2');
let añadir = document.querySelector('.articulo1');
let orden = document.querySelector('#OrdenFacturacion');
let cliente = document.querySelector('#Cliente');
let negocio = document.querySelector('#ModeloNegocio');
let ingresarPago = document.querySelector('#pago');
let botones = document.querySelector('.botones');
let fondo = document.querySelector('.fondo');
let loader = document.querySelector('.cont-loader');
let botonFiltrar = document.querySelector('.btnFiltrar');
let fechaIni = document.querySelector('#fechaInicial');
let ModeloNegocio = document.querySelector('#modeloNegocio');
let optionV = document.querySelector('#modeloNegocio');
let divisa = document.querySelector('.divisa');
let generar = document.querySelector('.generar')
let resultado = document.querySelector('.resultado')
let cerrar = document.querySelector('.x')

const facturas = await fetch("./facturas.json");
const datosFacturas = await facturas.json();

const formatoMoneda = await fetch('./moneda.json');
const datosMoneda = await formatoMoneda.json();

const formatoModelo = await fetch('./modelos.json');
const datosModelo = await formatoModelo.json();

/* console.table(datosFacturas) */ //imprime resultados

/* datosMoneda.forEach(element => {
    console.log(element.abreviatura)
});
 */

/* datosFacturas.forEach(element => {
    console.log(element.codigoOrdenDeFacturacion)
}); */

datosMoneda.forEach(element => {
    ingresarMoneda.innerHTML += `<option class="divisa" value="${element.abreviatura}"> ${element.abreviatura}- ${element.descripcion}</option>`;
});

datosModelo.forEach(element => {
    ModeloNegocio.innerHTML += `<option value="${element.nombre}">${element.nombre}</option>`;
})

boton.addEventListener('click', () => {
    loader.style.display = 'block'
    back.style.background = 'none';
    back.style.background = 'white';
    articulo.style.display = 'none';
    botones.style.opacity = '100';
    fondo.style.opacity = '0';
    generar.style.cursor = 'default';
    generar.disabled = true;

    setTimeout(() => {
        loader.style.display = 'none'
        añadir.innerHTML += `
                <div class="filtro5">
                    <img src="./iconos/Moneda.svg" alt="">
                        <div class="infoFiltro5">
                            <label for="moneda">Moneda</label>
                            <span>${ingresarMoneda.value}</span>
                        </div>
                 </div>
                `
            ingresar.innerHTML += `
                <thead>
                    <th>Ver</th>
                    <th>Orden de facturación</th>
                    <th>Fecha de registro</th>
                    <th>Cliente</th>
                    <th>Modelo de Negocio</th>
                    <th>Descripción</th>
                    <th>Forma de pago</th>
                    <th>Fecha de vencimiento</th>
                    <th>Valor total a cobrar</th>
                    <th>Valor Anticipo</th>
                    <th>Asociar Anticipo</th>
                    <th><input type="checkbox" id="check"><label for""></label></th>
                </thead>
                `
            datosFacturas.forEach(dato => {
                if (orden.value == dato.codigoOrdenDeFacturacion || cliente.value == dato.clienteIdentificacion || optionV.value == dato.modeloNegocio
                    || fechaIni.value == dato.fechaRegistro && dato.fechaVencimiento) {

                    ingresar.innerHTML += `
            <tr>
                <td><div class="archivos"><img src="./iconos/Adobegreen.svg" ><img src="./iconos/Docgreen.svg" ></div></td>
                <td>${dato.codigoOrdenDeFacturacion}</td>
                <td>${dato.fechaRegistro}</td>
                <td value="${dato.clienteIdentificacion}">${dato.clienteIdentificacion} - ${dato.clienteNombre} </td>
                <td>${dato.modeloNegocio}</td>
                <td >${dato.descripcionOrdenFacturacion}</td>
                <td><select id = "pago">
                    <option>--Seleccione--</option>
                    <option>15</option>
                    <option>30</option>
                    <option>60</option>
                    </select></td>
                <td>${dato.fechaVencimiento}</td>
                <td>${dato.valorTotalACobrar}</td>
                <td>${dato.valorAnticipo}</td>
                <td>${dato.asociarAnticipo[3]}</td>
                <td><input type="checkbox" id="check" ><label  class= "diseño" for"check"></label></td>
            </tr>
            `
                }
            
            });

            let sel = Array.from(document.querySelectorAll('#check'));

            //remember
            sel.map((e) => {
                e.addEventListener('click', () => {
                    generar.style.cursor = 'pointer';
                    generar.disabled = false;
                    generar.classList.remove('gris')
                })
            })

            generar.addEventListener('click', () => {
                
                let oscurecer = document.querySelector('.oscurecer');
                let imprimir = document.querySelector('.table2');
                let inputCheck = ingresar.querySelectorAll('input[type="checkbox"]');
                oscurecer.style.opacity = "0.6";
                imprimir.style.opacity = "100";
                resultado.style.display = 'block';

                let numCheck = 0;

                let ordenFact = [];
                let documento = [];
                let factura = [];
                let valor = [];

                for (let i = 0; i < inputCheck.length; i++) {

                    if (inputCheck[i].checked) {
                        ordenFact.push(ingresar.rows[i].cells[1].innerHTML);
                        documento.push(ingresar.rows[i].cells[4].innerHTML);
                        factura.push(ingresar.rows[i].cells[3].innerHTML);
                        valor.push(ingresar.rows[i].cells[8].innerHTML);
                        numCheck++;
                    }
                }
                imprimir.innerHTML += `
                <thead>
                    <th>Orden de Facturación</th>
                    <th>Modelo</th>
                    <th>Factura</th>
                    <th>Valor</th>
                    <th>Ver</th>
                </thead> 
                `
                for (let i = 0; i < numCheck; i++) {
                    imprimir.innerHTML += `          
                <tr>
                    <td>${ordenFact[i]}</td>
                    <td>${documento[i]}</td>
                    <td>${factura[i]}</td>
                    <td>${valor[i]}</td>
                    <td><div class="archivos"><img src="./iconos/Adobeblue.svg" ><img src="./iconos/Docblue.svg" ></div></td>
                </tr>
            `
                }
                cerrar.addEventListener('click', () => {
                    resultado.style.display = 'none';
                    oscurecer.style.opacity = "100";
                    imprimir.innerHTML = "";
                })
            })
        
        }, 600);
});

botonFiltrar.addEventListener('click', () => {
    let filtro5 = document.querySelector('.filtro5')
    ingresar.innerHTML = '';
    fondo.style.opacity = '100';
    articulo.style.display = 'flex';
    filtro5.style.display = 'none'
});





