const traerDatosJson = () => {
  return fetch("./InformacionServicio.json").then((data) => data.json());
};

const pintarDatosJson = async () => {
  let informacionServicio = await traerDatosJson();
  pintarDivsEquipos(informacionServicio);
  pintarDatosCalendario(informacionServicio);
  agregarOpcionesSelectEquipo(informacionServicio);
  pruebaCalendario(informacionServicio);
};
pintarDatosJson();

let seccionesEquipos = document.querySelector(".seccionesEquipos");
let seccionesTarifas = document.querySelector(".seccionesTarifas");

let idEquipos;
function pintarDivsEquipos(mostrarDatosJson) {
  mostrarDatosJson.forEach((dato) => {
    if (dato.codigo != -1) {
      seccionesEquipos.innerHTML += `
                <div id='caja' class="divEquipo">
                    <h6 id='${dato.codigo}'>${dato.nombreEquipo}</h6>
                    <img id="eliminarEquipo" onclick="eliminarEquipo('${dato.nombreEquipo}')" alt="">
                </div>                 
                `;
      seccionesTarifas.innerHTML += `
                <div class="divTarifas">
                    <span>$ ${dato.tarifaPGR}</span>
                    <span>$ ${dato.tarifaRI}</span>
                </div>                     
                `;
      tarifaPGR = dato.tarifaPGR;
      tarifaRI = dato.tarifaRI;

      let datosCalendarioCadena = dato.calendario;
      let datosCalendarioTransformados = JSON.parse(datosCalendarioCadena);
      let conversionDatosCalendario = Object.keys(datosCalendarioTransformados).map((key) => [Number(key), datosCalendarioTransformados[key]]);

      /* console.log(conversionDatosCalendario) */
      let bodycalendario = document.querySelector('#ingresar')
      
      for (let i = 0; i < conversionDatosCalendario.length; i++) {
        /* console.log(conversionDatosCalendario[i][1].Editable) */
        bodycalendario.innerHTML +=`
              <td>${conversionDatosCalendario[i][1].Fecha}</td>
          
        `
      }
      filaTarifas = document.querySelectorAll("#filaTarifas");
      
      
 /*   console.log(datosCalendarioCadena) */
    } 
  });
      /* let prueba = Array.from(document.querySelectorAll('h6'))
        prueba.forEach(element => {
        console.log(element)
      }); */

     

}

function pruebaCalendario(pruebaCal){
  pruebaCal.forEach(element => {
    
    let datosCalendarioCadena = element.calendario;
    
    let datosCalendarioTransformados = JSON.parse(datosCalendarioCadena);
    console.log(datosCalendarioTransformados)
    /*let conversionDatosCalendario = Object.keys(datosCalendarioTransformados).map((key) => [Number(key), datosCalendarioTransformados[key]]);
      */
  });
  
}




/* let datosCalendarioCadena = dato.calendario;
      let datosCalendarioTransformados = JSON.parse(datosCalendarioCadena);
      let conversionDatosCalendario = Object.keys(
        datosCalendarioTransformados
      ).map((key) => [Number(key), datosCalendarioTransformados[key]]); */


function pintarDatosCalendario(mostrarDatosJson) {
  mostrarDatosJson.forEach((data) => {
    if (data.codigo === -1) {
      let dias = data.calendario;
      let conversionDatosCalendario = Object.keys(dias).map((key) => [
        Number(key),
        dias[key],
      ]);
      for (let i = 0; i < conversionDatosCalendario.length; i++) {
        cabeceraTabla.innerHTML += `
                    <th><p class="dias">${conversionDatosCalendario[
            i
          ][1].DescripcionDia.substring(
            0,
            2
          )}</p><p>${conversionDatosCalendario[i][1].Fecha.substring(
            0,
            2
          )}</p></th>
                `;
        filaTarifas.innerHTML += `
                <td><select id="selectDatoCalendario"></select></td>		
                `;
      }
    }
  });
}

let botonInformacion = document.getElementById("botonInformacion");
let tablaInformacionTarifas = document.getElementById(
  "tablaInformacionTarifas"
);
let botonAgregarEquipo = document.getElementById("botonAgregarEquipo");
let botonCerrarModalAgregar = document.getElementById(
  "botonCerrarModalAgregar"
);
let modalAgregarEquipos = document.querySelector(".modalAgregar");
let botonMostrarTarifas = document.getElementById("botonMostrarTarifas");
let botonCerrarTarifas = document.getElementById("botonCerrarTarifas");
let tarifas = document.querySelector(".tarifas");
let botonAgregarNuevoEquipo = document.getElementById(
  "botonAgregarNuevoEquipo"
);
let inputFiltrarEquipo = document.getElementById("inputFiltrarEquipo");
let botonConsultar = document.getElementById("botonConsultar");
let scroll = document.querySelector(".scroll");

function asignacionEventos() {
  botonInformacion.addEventListener("mouseenter", mostrarInformacionTarifas);
  botonInformacion.addEventListener("mouseleave", ocultarInformacionTarifas);
  botonAgregarEquipo.addEventListener("click", mostrarModalAgregarEquipos);
  botonCerrarModalAgregar.addEventListener("click", ocultarModalAgregarEquipos);
  botonMostrarTarifas.addEventListener("click", mostrarSeccionTarifas);
  botonCerrarTarifas.addEventListener("click", ocultarSeccionTarifas);
  botonAgregarNuevoEquipo.addEventListener("click", crearNuevoEquipos);
  botonConsultar.addEventListener("click", mostrarSeccionCalendario);
  inputFiltrarEquipo.addEventListener("keyup", filtrar);
  seccionesEquipos.addEventListener("scroll", hizoScroll);
}
asignacionEventos();

function mostrarInformacionTarifas() {
  tablaInformacionTarifas.style.display = "block";
}
function ocultarInformacionTarifas() {
  tablaInformacionTarifas.style.display = "";
}
function mostrarModalAgregarEquipos() {
  modalAgregarEquipos.style.display = "flex";
}
function ocultarModalAgregarEquipos() {
  modalAgregarEquipos.style.display = "none";
}

function mostrarSeccionTarifas() {
  tarifas.style.display = "block";
  botonMostrarTarifas.style.display = "none";
}
function ocultarSeccionTarifas() {
  tarifas.style.display = "none";
  botonMostrarTarifas.style.display = "inline";
}

function mostrarSeccionCalendario(e) {
  if (inputFecha.value != "" && selectObra.value != 0) {
    imagenCalendario.style.display = "none";
    informacionCalendario.style.display = "flex";
  } else {
    alertaConsultar.style.display = "flex";
    setTimeout(() => {
      alertaConsultar.style.display = "none";
    }, 2000);
  }
  e.preventDefault();
}

function filtrar() {
  var filter,
    seccionFiltro,
    divEntreSeccionFiltro,
    textosFiltrar,
    valorTextoFiltrado;
  filter = inputFiltrarEquipo.value.toUpperCase();
  seccionFiltro = document.querySelector(".seccionesEquipos");
  divEntreSeccionFiltro = document.querySelectorAll(".divEquipo");
  divTarifas = document.querySelectorAll(".divTarifas");
  for (let i = 0; i < divEntreSeccionFiltro.length; i++) {
    textosFiltrar = divEntreSeccionFiltro[i].querySelectorAll("h6")[0];
    valorTextoFiltrado = textosFiltrar.textContent;
    if (valorTextoFiltrado.toUpperCase().indexOf(filter) > -1) {
      divEntreSeccionFiltro[i].style.display = "";
    } else {
      divEntreSeccionFiltro[i].style.display = "none";
    }
  }
}

function hizoScroll() {
  let scrollTopSeccionesEquipos = seccionesEquipos.scrollTop;
  scroll.scrollTop = scrollTopSeccionesEquipos;
  seccionesTarifas.scrollTop = scrollTopSeccionesEquipos;
}

let selectEquipo = document.querySelectorAll(".selectEquipos");
function agregarOpcionesSelectEquipo(mostrarDatosJson) {
  for (let i = 0; i < selectEquipo.length; i++) {
    mostrarDatosJson.forEach((data) => {
      selectEquipo[i].innerHTML += `		
                            <option >${data.nombreEquipo}</option>
                        `;
    });
  }
}

const todosDatos = [];
fetch("./InformacionServicio.json")
  .then((blob) => blob.json())
  .then((data) => todosDatos.push(...data));
function crearNuevoEquipos() {
  let selectAgregarEquipo = document.getElementById("SelectAgregarEquipo");
  let nombreEquipo =
    selectAgregarEquipo.options[selectAgregarEquipo.selectedIndex].innerText;
  seccionesEquipos.innerHTML += `
                <div class="divEquipo">
                    <h6>${nombreEquipo}</h6>
                    <img id="eliminarEquipo" onclick="eliminarEquipo('${nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
                </div>                 
                `;
  pintarDivsTarifas(todosDatos);
  let nuevoEquipo = { nombreEquipo, tarifaPGR, tarifaRI };
  todosDatos.push(nuevoEquipo);
}
