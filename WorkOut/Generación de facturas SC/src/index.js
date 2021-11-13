import { llenarSelectorMonedas, llenarSelectorModelos } from "./filtros.js";
import { mostrarFacturas } from "./facturas.js"

let listadoFacturas = document.querySelector("#contendorDatosFacturas");

let articulo = document.querySelector(".articulo2");

let ingresarPago = document.querySelector("#pago");
let botones = document.querySelector(".botones");
let fondo = document.querySelector(".fondo");
let loader = document.querySelector(".cont-loader");
let botonFiltrar = document.querySelector(".btnFiltrar");


let divisa = document.querySelector(".divisa");
let generar = document.querySelector(".generar");
let resultado = document.querySelector(".resultado");
let cerrar = document.querySelector(".x");

llenarSelectorMonedas();
llenarSelectorModelos();

const mostrarContenedor = () => {
  loader.style.display = "block";

  const contenedorResultados = document.querySelector(".ordenes");
  contenedorResultados.style.background = "none";
  contenedorResultados.style.background = "white";

  articulo.style.display = "none";
  botones.style.opacity = "100";
  fondo.style.opacity = "0";
  generar.style.cursor = "default";
  generar.disabled = true;
};

const mostrarMonedaSeleccionada = () => {
  const selectorMoneda = document.querySelector("#moneda");

  document.querySelector("#monedaSeleccionada").innerHTML = `
        <img src="./iconos/Moneda.svg" alt="">
            <div class="infoFiltro5">
                <label for="moneda">Moneda</label>
                <span>${selectorMoneda.value}</span>
            </div>
    `;
};




const botonConsultar = document.querySelector("#botonConsultar");
botonConsultar.addEventListener("click", () => {
  mostrarContenedor();

  setTimeout( () => {
    loader.style.display = "none";

    mostrarMonedaSeleccionada();

    mostrarFacturas();

    let sel = Array.from(document.querySelectorAll("#check"));

    //remember
    sel.map((e) => {
      e.addEventListener("click", () => {
        generar.style.cursor = "pointer";
        generar.disabled = false;
        generar.classList.remove("gris");
      });
    });

    generar.addEventListener("click", () => {
      let oscurecer = document.querySelector(".oscurecer");
      let imprimir = document.querySelector(".table2");
      let inputCheck = listadoFacturas.querySelectorAll(
        'input[type="checkbox"]'
      );
      oscurecer.style.opacity = "0.6";
      imprimir.style.opacity = "100";
      resultado.style.display = "block";

      let numCheck = 0;

      let ordenFact = [];
      let documento = [];
      let factura = [];
      let valor = [];

      for (let i = 0; i < inputCheck.length; i++) {
        if (inputCheck[i].checked) {
          ordenFact.push(listadoFacturas.rows[i].cells[1].innerHTML);
          documento.push(listadoFacturas.rows[i].cells[4].innerHTML);
          factura.push(listadoFacturas.rows[i].cells[3].innerHTML);
          valor.push(listadoFacturas.rows[i].cells[8].innerHTML);
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
                `;
      for (let i = 0; i < numCheck; i++) {
        imprimir.innerHTML += `          
                <tr>
                    <td>${ordenFact[i]}</td>
                    <td>${documento[i]}</td>
                    <td>${factura[i]}</td>
                    <td>${valor[i]}</td>
                    <td><div class="archivos"><img src="./iconos/Adobeblue.svg" ><img src="./iconos/Docblue.svg" ></div></td>
                </tr>
            `;
      }
      cerrar.addEventListener("click", () => {
        resultado.style.display = "none";
        oscurecer.style.opacity = "100";
        imprimir.innerHTML = "";
      });
    });
  }, 600);
});

botonFiltrar.addEventListener("click", () => {
  let filtroMoneda = document.querySelector(".filtroMoneda");
  listadoFacturas.innerHTML = "";
  fondo.style.opacity = "100";
  articulo.style.display = "flex";
  filtroMoneda.style.display = "none";
});
