let crearSeccion = function(tag, tipo, nombre){
    let contenido = document.createElement(tag);
    contenido.setAttribute(tipo, nombre);
    return contenido;
}

let crearFormulario = function(texto1, texto2, texto3, texto4, texto5){
    let form = document.createElement('form');
    let input1 = document.createElement('input');
    input1.classList.add('input1');
    input1.placeholder= texto1;
    let input2 = document.createElement('input');
    input2.classList.add('input2');
    input2.placeholder= texto2;
    let input3 = document.createElement('input');
    input3.classList.add('input3');
    input3.placeholder= texto3;
    let input4 = document.createElement('input');
    input4.classList.add('input4');
    input4.placeholder= texto4;
    let input5 = document.createElement('input');
    input5.classList.add('input5');
    input5.placeholder= texto5;

    form.append(input1, input2, input3, input4, input5 );

    return form;
}
    
let main = document.createElement('main');
document.body.append(main);

let section = document.createElement('section')
main.append(section);

let logo = document.createElement('img');
logo.src='./images/Imageners-teamviewer-2.jpg';
section.append(logo);

let articulo = crearSeccion('article', 'class', 'formulario');
section.append(articulo);

let titulo = document.createElement('h1');
titulo.textContent='Ayuda remota';
articulo.append(titulo);

let formulario = crearFormulario('Nombre y Apellidos', 'NIT o nombre de la compañia', 'Breve descripcion del incoveniente', 'Teléfono o celular', 'Correo electrónico');
articulo.append(formulario);

let pError = crearSeccion('p', 'class' , 'pError');
formulario.append(pError);

let aside = crearSeccion('aside', 'class', 'condiciones');
formulario.append(aside);

let check = crearSeccion('input', 'class', 'check')
check.type= 'checkbox';
aside.append(check);

let terminos = crearSeccion('span', 'class', 'terminos');
terminos.innerHTML='Al enviar este formulario,autorizo el servicio de software TeamViewer para realizar el acceso remoto, autorizo realizar cambios en el equipo los cuales incluyen puntos de restauración del sistema operativo , manifiesto que conozco la <zz>política de protección de datos</zz>" autorizo de manera voluntaria , previa, expresa e inequívoca a SINCOSOFT S.A.S., para tratar mis datos personales y de carácter sensible (en caso de ser necesaria su recolección), de acuerdo con las políticas de tratamiento de datos personales de la empresa y para los fines relacionados con su objeto social y especial para fines legales,contractuales y comerciales de SINCOSOFT S.A.S. De igual manera, acepto los " <zz>términos condiciones</zz>" establecidos por SINCOSOFT S.A.S." "';
aside.append(terminos);

let boton = crearSeccion('input', 'class', 'boton');
boton.type='submit'
boton.value='Solicitar sesión'
formulario.append(boton);

let pie = document.createElement('footer');
main.append(pie);

let textoPie = document.createElement('p');
textoPie.textContent='PBX: (571) 5 190 345 - Cr. 12 # 79 - 50 - Bogotá, D.C., Colombia. - Copyright 2016. SINCOSOFT S.A.S. Todos los derechos reservados.';
pie.append(textoPie);

const nombreApellido = document.querySelector('.input1')
const nit = document.querySelector('.input2')
const descripcion = document.querySelector('.input3')
const telefono = document.querySelector('.input4')
const email = document.querySelector('.input5')


function error(clase, ){
    clase.classList.add('error');
    clase.classList.remove('success');
    pError.textContent='¡Completa los campos vacíos!'
};

function success(clase){
    clase.classList.add('success');
    clase.classList.remove('error');
    pError.textContent='';
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nombreApellido.value === ''){
        error(nombreApellido );
    }else{
        success(nombreApellido);
    }

    if(nit.value === ''){
        error(nit);
    }else{
        success(nit);
    }

    if(descripcion.value === ''){
        error(descripcion);
    }else{
        success(descripcion);
    }

    if(telefono.value === ''){
        error(telefono);
    }else{
        success(telefono);
    }

    if(email.value === ''){
        error(email);
    }else{
        success(email);
    }

    if (check.checked == true){
        
    }else if(check.checked == false){
    
        alert('Acepte los terminos');
    }
    
});

nombreApellido.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    nombreApellido.value = valorInput.replace(/[0-9]/g, '');
    nombreApellido.textContent= valorInput;
});

telefono.addEventListener('keyup', (e) => {let valorInput = e.target.value;
    telefono.value = valorInput.replace(/\s/g, '').replace(/\D/g, '');
    telefono.textContent = valorInput;
});



