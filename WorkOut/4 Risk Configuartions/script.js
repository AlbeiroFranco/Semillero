let ver = document.querySelector('.formulario');
let press = document.querySelector('.nuevo');


let ingresarCodigo = [],
    ingresarDescripcion = [],
    ingresarMaximo = [],
    ingresarMinimo = [];

let boton = document.querySelector('.guardar');

press.addEventListener('click', ()=>{
    ver.style.display = 'block';
})

boton.addEventListener('click', registrar);


function registrar() {

    let valorCodigo = document.querySelector('#txtCodigo').value,
        valorDescripcion = document.querySelector('#txtDescripcion').value,
        valorMaximo = document.querySelector('#txtValorMin').value,
     
        valorMinimo = document.querySelector('#txtValorMax').value;
        
        ingresarCodigo.push(valorCodigo),
        ingresarDescripcion.push(valorDescripcion),
        ingresarMaximo.push(valorMaximo),
        ingresarMinimo.push(valorMinimo),
        

        localStorage.setItem('codigo_insert', JSON.stringify(ingresarCodigo));
        localStorage.setItem('descripcion_insert', JSON.stringify(ingresarDescripcion));
        localStorage.setItem('Maximo_insert', JSON.stringify(ingresarMaximo));
        localStorage.setItem('Minimo_insert', JSON.stringify(ingresarMinimo));
                
        llenarTabla()
        
    }
