import { moneda } from "./moneda.js";
import { pago } from "./pago.js";

let ingresarMoneda = document.querySelector('#moneda');
let ingresar = document.querySelector('.tabla');
let boton = document.querySelector('.boton');
let back = document.querySelector('.ordenes');
let articulo = document.querySelector('.articulo2');
let añadir = document.querySelector('.articulo1');
let orden = document.querySelector('#OrdenFacturacion');
let cliente = document.querySelector('#Cliente');
let negocio = document.querySelector('#ModeloNegocio');
let ingresarPago = document.querySelector('.pago')


for (let i = 0; i < moneda.length; i++) {
    ingresarMoneda.innerHTML += `<option value = '${i}'>${moneda[i]}</option>`;
}

/* for (let i = 0; i < pago.length; i++) {
    ingresarPago.innerHTML += `<option value = '${i}'>${pago[i]}</option>`;
    
}  */

boton.addEventListener('click', () => {
    back.style.background = 'none';
    back.style.background = 'white';
    articulo.style.display = 'none';
    añadir.innerHTML += `
                <div class="filtro4">
                    <img src="./iconos/Moneda.svg" alt="">
                        <div class="infoFiltro4">
                            <label for="moneda">Moneda</label>
                            <select name="moneda" id="moneda"></select>
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
             
    fetch('clientes.JSON')
        .then(response => response.json())
        .then(data => {
            data.forEach(dato => {

                if(orden.value == dato.Orden || cliente.value == dato.Cliente || negocio.value == dato.ModeloNegocio){
                    
                ingresar.innerHTML += `
            <tr>
                <td></td>
                <td>${dato.Orden}</td>
                <td>${dato.FechaRegistro}</td>
                <td>${dato.Cliente}</td>
                <td>${dato.ModeloNegocio}</td>
                <td>${dato.Descripcion}</td>
                <td><select class = "pago"></td>
                <td>${dato.FechaVencimiento}</td>
                <td>${dato.ValorTotal}</td>
                <td>${dato.ValorAnticipo}</td>
                <td>${dato.Asociar}</td>
                <td><input  type="checkbox"></td>
            </tr>
            `
                }    
            });
            
    
        });
})
     



