export const llenarSelectorMonedas = async function () {
    const formatoMoneda = await fetch("./moneda.json");
    const datosMoneda = await formatoMoneda.json();
   
    let ingresarMoneda = document.querySelector("#moneda");
    datosMoneda.forEach((element) => {
    ingresarMoneda.innerHTML += `<option 
        class="divisa" 
        value="${element.abreviatura}"> 
            ${element.abreviatura}- ${element.descripcion}
        </option>`;
    });
}


export const llenarSelectorModelos = async function(){

    const ModeloNegocio = document.querySelector("#modeloNegocio");
    const formatoModelo = await fetch("./modelos.json");
    const datosModelo = await formatoModelo.json();
    datosModelo.forEach((element) => {
      ModeloNegocio.innerHTML += `<option value="${element.nombre}">${element.nombre}</option>`;
    });
}