// Crear funcion general

let crearContenido = function(label,tipo,nombre){
    let contenido = document.createElement(label);
    contenido.setAttribute(tipo,nombre);
    return contenido;
}

let container = crearContenido("aside", "class", "container");
document.body.append(container);

let header = crearContenido("div", "class", "header");
container.append(header);

let h1 = document.createElement("h1")
h1.innerText="Learn to code by watching others";
header.append(h1);

let p = document.createElement("p")
p.innerText="See how experienced developers solve problems in real time. Watching scripted tutorials is great, but understanding now developers think is invaluable.";
header.append(p);

let section = crearContenido("section", "class", "section");
container.append(section);

let button = crearContenido("button","class", "button", );
button.innerHTML="<b>Try it free 7 days</b> then $20/mo. thereafter";
section.append(button);

let formulario = crearContenido("form", "id", "formulario");
section.append(formulario);

//Crear inputs formulario

let inputForm = function(cont, tipo, nombre, ph ){
    let input = document.createElement("input");
    input.setAttribute(tipo,nombre);
    input.type=cont;
    input.placeholder=ph;
    return input;
};

let div1 = document.createElement("div");
formulario.append(div1)

let input1 = inputForm("text", "id", "firstname", "First Name");
div1.append(input1);

let span1 = document.createElement("span");
div1.append(span1);

let div2 = document.createElement("div");
formulario.append(div2)

let input2 = inputForm("text", "id", "lastname", "Last Name");
div2.append(input2);

let span2 = document.createElement("span");
div2.append(span2);

let div3 = document.createElement("div");
formulario.append(div3)

let input3 = inputForm("email", "id", "email", "Email");
div3.append(input3);

let span3 = document.createElement("span");
div3.append(span3);

let div4 = document.createElement("div");
formulario.append(div4)

let input4 = inputForm("password", "id", "password", "Password");
div4.append(input4);

let span4 = document.createElement("span");
div4.append(span4);

let inputSubmit = inputForm("submit", "class" , "valide")
inputSubmit.value ="CLAIM YOUR FREE TRIAL";
formulario.append(inputSubmit);

let terms = crearContenido("p", "class", "text-form");
terms.innerHTML=" By clicking the button, you are agreeing to our <b>Terms and Services</b>"
formulario.append(terms);

function error(info, message){
    const control = info.parentElement;
    const span = control.querySelector('span');
    span.innerText = message;
    info.className += 'error' ;
    span.className += 'error-text';
};

function success(info){
    info.className += 'success';
}

formulario.addEventListener('submit', e => {
    e.preventDefault();

    let firstName = input1.value.trim();
    let lastName = input2.value.trim();
    let emailV = email.value.trim();
    let passwordV = password.value.trim();

    if(firstName === ''){
        error(input1, 'First Name cannot be empty');
    }
    else{
        success(fn);
        
    }

    if(lastName === ''){
        error(input2, 'Last Name cannot be empty');
    }
    else{
        success(input2);
    }

    if(emailV === ''){
        error(input3, 'Looks like this is not an email');
    }
    else{
        success(input3);
    }

    if(passwordV === ''){
        error(input4, 'Password cannot be empty');
    }
    else{
        success(input4);
    }

   
});


