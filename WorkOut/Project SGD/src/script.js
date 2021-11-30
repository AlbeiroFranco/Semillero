const imgFondo = document.querySelector('.imgFondo');
const descripcion = document.querySelector('.descripcion')


const tarjetas = document.getElementById('tarjetas');
const traerDatos = () => {
    return fetch("./datos.json").then((data) => data.json());
};

const crearContenidoTarjetas = (pintarDatos) => {
    pintarDatos.forEach((dato) => {
        tarjetas.innerHTML += `
        <aside id="${dato.id}" class="contenidoTarjetas">
            <img src="${dato.img}">
            <div>
                <span><b>${dato.id} - Radicado:</b> ${dato.radicado}</span>
                <span class="tituloPlan">${dato.plan}</span>
                <span><b>Actividad</b>: ${dato.actividad}</span>
                <span class="hora"><b>Vencimiento:</b> ${dato.vencimiento} - ${dato.hora}</span>
            </div>
        </aside>
        `
    });
    const contenidoTarjetas = Array.from(document.querySelectorAll('.contenidoTarjetas'));
    contenidoTarjetas.map((tarjeta)=>{
        tarjeta.addEventListener('click',()=>{
            imgFondo.classList.add('ocultar');
            descripcion.classList.remove('ocultar');
        })
    })
};

const mostrarTarjeras = async () => {
    const datosTarjetas = await traerDatos();
    crearContenidoTarjetas(datosTarjetas);
};
mostrarTarjeras();


let datosDescriptores = document.querySelector('#datosDescriptores');
let llenarCampos = document.querySelector('.llenarCampos');

function crearSeccionDescriptores() {
        datosDescriptores.style.cssText = "padding: 10px; margin: auto";
        llenarCampos.style.cssText= "padding: 10px 0 0 20px";
        
        llenarCampos.innerHTML = `
            <span>Los campos con (<span class="asterisco">*</span>) son obligatorios</span>
        `;

        datosDescriptores.innerHTML = `
            <label>Proveedor</label>
            <input type="text" name="" id="">
            <label>(<span class="asterisco">*</span>)Consecutivo factura de proveedor</label>
            <input type="text" name="" id="">
            <label>(<span class="asterisco">*</span>)Valor total del documento</label>
            <input type="text" name="" id="">
            <label>(<span class="asterisco">*</span>)Fecha de vencimiento de factura</label>
            <input type="date" name="" id="">
            <label>Contrato de obra</label>
            <input type="text" name="" id="">
            <label>Acta de obra</label>
            <input type="text" name="" id="">
            <label>Entrada de almacen</label>
            <input type="text" name="" id="">
            <label>(<span class="asterisco">*</span>)Centro de costos</label>
            <input type="text" name="" id="">
            <label>Fecha de costos</label>
            <input type="date" name="" id="">
            <label>Obras por usuarios</label>
            <input type="text" name="" id="">
    `
    
}

let descriptores = document.querySelector('#descriptores');
descriptores.addEventListener('click', () => {
    crearSeccionDescriptores();
})


let tituloTabla = document.querySelector('.tituloTabla');
let contenidoTabla = document.querySelector('.contenidoTabla');
async function crearSeccionSeguimientos() {
    const formatoSeguimiento = await fetch("./seguimiento.json");
    const datosSeguimiento = await formatoSeguimiento.json();
    tablaSeguimientos.style.margin = "20px auto";
    document.querySelector('.tabla').style.paddingBottom = "5px"
    tituloTabla.innerHTML = `
            <tr>
                <th>Paso</th>
                <th>Actividad de flujo</th>
                <th>Estado</th>
                <th>Usuario</th>
                <th>Observaciones</th>
            </tr>
        `
    datosSeguimiento.forEach(dato => {
        contenidoTabla.innerHTML += `
            <tr>
                <td >${dato.paso}</td>
                <td>${dato.actividad}</td>
                <td>${dato.estado}</td>
                <td>${dato.usuario}</td>
                <td>${dato.observaciones}</td>
            </tr>
        `
    });
}

document.querySelector('#seguimientos').addEventListener('click', ()=>{
  crearSeccionSeguimientos();
})


const sinCorrespondencia = document.querySelector('#sinCorrespondencia');
function crearSeccionCorrespondencia() {
    sinCorrespondencia.style.padding = "20px"
    sinCorrespondencia.innerHTML = `
        <span>No tiene correspondencia</span>
    `
}

document.querySelector('#correspondencia').addEventListener('click', ()=>{
    crearSeccionCorrespondencia();
})


const enviarDocumentos = document.querySelector('.enviarDocumentos');
function crearSeccionDocumentos() {
    enviarDocumentos.style.padding = "20px"
    enviarDocumentos.innerHTML = `
        <div class="anexos">
            <a href="">INSTALACIONMARCO.PDF</a>
            <a href="">ANEXOSGD.PDF</a>
            <a href="">FS00002-FACTURAS DE SERVICIOS.IMG </a> 
        </div>
        <div class="subirDocumentos">
            <p>Suelte los archivos aquí para comenzar a cargarlos <br> <br> o</p>
            <input type="file" name=""  id="">
            <button class="enviar" type="submit">Enviar</button>
        </div>
    `
}

document.querySelector('#documentos').addEventListener('click', () =>{
    crearSeccionDocumentos();
})


const expandir = document.querySelector('.expandir');
const contraer = document.querySelector('.contraer')
expandir.addEventListener('click', ()=>{
    expandir.classList.add('ocultar');
    contraer.classList.remove('ocultar');
    crearSeccionDescriptores();
    crearSeccionSeguimientos();
    crearSeccionCorrespondencia();
    crearSeccionDocumentos();
})

contraer.addEventListener('click', ()=>{
    expandir.classList.remove('ocultar');
    contraer.classList.add('ocultar');
    llenarCampos.classList.add('ocultar');
    datosDescriptores.innerHTML = "";
    tituloTabla.innerHTML = "";
    contenidoTabla.innerHTML = "";
    sinCorrespondencia.innerHTML = "";
    enviarDocumentos.innerHTML = "";
})

const modalReasignar = document.querySelector('#modalReasignar');
const reasignar = document.querySelector('#reasignar');
reasignar.addEventListener('click', ()=>{
    modalReasignar.classList.add('modalReasignar');
    modalReasignar.style.display = "" ;
    
})

document.querySelector('#asignar').addEventListener('click', ()=>{
    modalReasignar.style.display = 'none';
})

const modalCompletado = document.querySelector('#modalCompletado');
const completar = document.querySelector('#completar');
completar.addEventListener('click', ()=>{
    modalCompletado.classList.add('modalCompletado');
    modalCompletado.style.display = "";
})

document.querySelector('#btnCompletar').addEventListener('click', ()=>{
    modalCompletado.style.display = 'none';
})

const modalResponder = document.querySelector('#modalResponder');
const respuesta = document.querySelector('#respuesta');
respuesta.addEventListener('click', ()=>{
    modalResponder.classList.add('modalResponder');
    modalResponder.style.display = "";
    
})

document.querySelector('#btnCompletar').addEventListener('click', ()=>{
    modalResponder.style.display = 'none';
})

const pasos = document.querySelector('#pasos');
const modalPasos = document.querySelector('#modalPasos')
pasos.addEventListener('click', ()=>{
    modalPasos.classList.remove('ocultar');
    modalPasos.classList.add('modalPasos');
})

modalPasos.addEventListener('click', ()=>{
    modalPasos.classList.add('ocultar');
    modalPasos.classList.remove('modalPasos');
})






