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


let descriptores = document.querySelector('.descriptores')
function crearSeccionDescriptores() {
        /* datosDescriptores.style.cssText = "padding: 10px; margin: auto"; */
        /* llenarCampos.style.cssText= "padding: 10px 0 0 20px"; Agregar Stilos directos al JavaScript*/
        
        descriptores.innerHTML += `
            <div id="llenarCampos" class="ocultar">
            <span>Los campos con (<span class="asterisco">*</span>) son obligatorios</span>
            </div>
        `;

        descriptores.innerHTML += `
            <form id="datosDescriptores" class="ocultar">
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
            </form>
    `
}
crearSeccionDescriptores();

let llenarCampos = document.querySelector('#llenarCampos'); 
let cambioImg1 = document.querySelector('.cambioImg1');
cambioImg1.addEventListener('click', () => {
    datosDescriptores.classList.toggle('ocultar');
    llenarCampos.classList.toggle('ocultar');
    cambioImg1.classList.toggle('rotar');
}) 


let insertarTabla = document.querySelector('.seguimientos')
function crearSeccionSeguimientos() {
    insertarTabla.innerHTML += `
        <table id="tablaSeguimientos" class="ocultar" >
        </table>
    `;

    tabla = document.querySelector('#tablaSeguimientos');

    tabla.innerHTML += `
        <thead class="tituloTabla">   
            <tr>
                <th>Paso</th>
                <th>Actividad de flujo</th>
                <th>Estado</th>
                <th>Usuario</th>
                <th>Observaciones</th>
            </tr>
        </thead>
        `;

    tabla.innerHTML += `
        <tbody class="contenidoTabla">
            
        </tbody>
        `;

    fetch("./seguimiento.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(dato => {
                document.querySelector('.contenidoTabla').innerHTML += `
                    <tr>
                        <td >${dato.paso}</td>
                        <td>${dato.actividad}</td>
                        <td>${dato.estado}</td>
                        <td>${dato.usuario}</td>
                        <td>${dato.observaciones}</td>
                    </tr>
                    `
        
    });
})
    
}
crearSeccionSeguimientos();

let cambioImg2 = document.querySelector('.cambioImg2');
cambioImg2.addEventListener('click', ()=>{
  tabla.classList.toggle('ocultar');
  cambioImg2.classList.toggle('rotar');
})


let correspondencia = document.querySelector('#correspondencia');
function crearSeccionCorrespondencia() {
     
    correspondencia.innerHTML += `
        <div id="textoCorrespondencia" class="ocultar">
           <span>No tiene correspondencia</span>
        </div>
    `
}
crearSeccionCorrespondencia();

let cambioImg3 = document.querySelector('.cambioImg3');
let textoCorrespondencia = document.querySelector('#textoCorrespondencia'); 
cambioImg3.addEventListener('click', ()=>{
    textoCorrespondencia.classList.toggle('ocultar');
    cambioImg3.classList.toggle('rotar');
}) 


let documentos = document.querySelector('.documentos');
function crearSeccionDocumentos() {
    documentos.innerHTML += `
        <div class="enviarDocumentos ocultar">
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
        </div>
    `
}
crearSeccionDocumentos();

let cambioImg4 = document.querySelector('.cambioImg4');
let enviarDocumentos = document.querySelector('.enviarDocumentos')
cambioImg4.addEventListener('click', () =>{
    enviarDocumentos.classList.toggle('ocultar');
    cambioImg4.classList.toggle('rotar');
})

let cambioImg = Array.from(document.querySelectorAll('.cambioImg'));
function cambio() {
    datosDescriptores.classList.toggle('ocultar');
    llenarCampos.classList.toggle('ocultar');
    tabla.classList.toggle('ocultar');
    textoCorrespondencia.classList.toggle('ocultar');
    enviarDocumentos.classList.toggle('ocultar');
    cambioImg.forEach(element => {
        element.classList.toggle('rotar');
    });
}


const expandir = document.querySelector('.expandir');
const contraer = document.querySelector('.contraer');
expandir.addEventListener('click', ()=>{
    expandir.classList.add('ocultar');
    contraer.classList.remove('ocultar');
        cambio()
})

contraer.addEventListener('click', ()=>{
    contraer.classList.add('ocultar');
    expandir.classList.remove('ocultar');
    cambio()
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


const modalPasos = document.querySelector('#modalPasos')
function cambioPasos() {
    modalPasos.classList.toggle('ocultar');
    modalPasos.classList.toggle('modalPasos');
}

const pasos = document.querySelector('#pasos');
pasos.addEventListener('click', ()=>{
    cambioPasos()
})


