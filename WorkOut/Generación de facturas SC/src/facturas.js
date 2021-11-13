const orden = document.querySelector("#OrdenFacturacion");
const cliente = document.querySelector("#Cliente");
const optionV = document.querySelector("#modeloNegocio");
let fechaIni = document.querySelector("#fechaInicial");

const listadoFacturas = document.querySelector("#contendorDatosFacturas");

const traerDatos = () => {
  return fetch("./facturas.json").then((data) => data.json());
};

const pintarTabla = ( datosPintar ) => {

    datosPintar.forEach( (dato) => {

      listadoFacturas.innerHTML += `
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
              `;
    
  });

};

const filtrarDatos = ( todasLasFacturas ) =>{
    return todasLasFacturas.filter(dato => orden.value == dato.codigoOrdenDeFacturacion ||
        cliente.value == dato.clienteIdentificacion ||
        optionV.value == dato.modeloNegocio ||
        (fechaIni.value == dato.fechaRegistro && dato.fechaVencimiento) )

}


export const mostrarFacturas = async () => {

  const datosFacturas = await traerDatos();
  
  const facturasFiltradas = filtrarDatos(datosFacturas);

  pintarTabla(facturasFiltradas);

};
