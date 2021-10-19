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


const facturas = await fetch("./facturas.json");
const datosFacturas = await facturas.json();

const formatoMoneda = await fetch('./moneda.json');
const datosMoneda = await formatoMoneda.json();

const formatoModelo = await fetch('./modelos.json');
const datosModelo = await formatoModelo.json();

/* console.table(datosFacturas) */

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

datosModelo.forEach(element =>{
    ModeloNegocio.innerHTML += `<option value="${element.nombre}">${element.nombre}</option>` ;       
})

boton.addEventListener('click', () => {
    loader.style.display = 'block'
    back.style.background = 'none';
    back.style.background = 'white';
    articulo.style.display = 'none';
    botones.style.opacity = '100';
    fondo.style.opacity = '0';

    setTimeout(() => {
        loader.style.display = 'none'

    
    añadir.innerHTML += `
                <div class="filtro5">
                    <img src="./iconos/Moneda.svg" alt="">
                        <div class="infoFiltro5">
                            <label for="moneda">Moneda</label>
                            <span>COP</span>
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
                    <th><input  type= "checkbox"></th>
                </thead>
                `
    datosFacturas.forEach(dato => {
        if (orden.value == dato.codigoOrdenDeFacturacion || cliente.value == dato.clienteIdentificacion || optionV.value == dato.modeloNegocio
            || fechaIni.value == dato.fechaRegistro && dato.fechaVencimiento) { */
            ingresar.innerHTML += `
            <tr>
                <td><div class="archivos"><img src="./iconos/Adobegreen.svg" ><img src="./iconos/Docgreen.svg" ></div></td>
                <td>${dato.codigoOrdenDeFacturacion}</td>
                <td>${dato.fechaRegistro}</td>
                <td value="${dato.clienteIdentificacion}">${dato.clienteIdentificacion} - ${dato.clienteNombre} </td>
                <td>${dato.modeloNegocio}</td>
                <td >${dato.descripcionOrdenFacturacion}</td>
                <td><select id = "pago"><option>${dato.formaPago}</option></select></td>
                <td>${dato.fechaVencimiento}</td>
                <td>${dato.valorTotalACobrar}</td>
                <td>${dato.valorAnticipo}</td>
                <td>${dato.asociarAnticipo[3]}</td>
                <td><input type="checkbox" id="check"></td>
            </tr>
            `
        } 
        
        
    });
}, 600);
});


botonFiltrar.addEventListener('click', () =>{
    let filtro5 = document.querySelector('.filtro5')
    ingresar.innerHTML= '';
    fondo.style.opacity = '100';
    articulo.style.display = 'flex';
    filtro5.style.display='none'
    
})




