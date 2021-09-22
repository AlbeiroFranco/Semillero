let crearContenido = function(etiqueta , tipo, name){
    let tag = document.createElement(etiqueta);
    tag.setAttribute(tipo, name);
    return tag;
}

let container = crearContenido('div', 'class', 'container');
document.body.append(container);

let section1 = crearContenido('div', 'class', 'section1');
container.append(section1);

let blue = crearContenido('div', 'class', 'blue');
section1.append(blue);

let sinco = crearContenido('h1', 'class', 'sinco');
sinco.innerHTML='S<span>incoS</span>oporte';
blue.append(sinco);

let section2 = crearContenido('div', 'class', 'section2');
container.append(section2);

let square = crearContenido('img', 'class', 'square');
square.src='./images/Figure.svg';
section2.append(square);

let section3 = crearContenido('div', 'class', 'section3');
container.append(section3);

let div1 = crearContenido('div', 'class', 'div1');
section3.append(div1);

let old = crearContenido('img', 'class', 'old');
old.src = './images/oldVersion.png';
let oldtext = crearContenido('p', 'class', 'oldtext');
oldtext.textContent='Esta opción dejara de ser vigente';
div1.append(old, oldtext);

let div2 = crearContenido('div', 'class', 'div2');
section3.append(div2);

let newImg = crearContenido('img', 'class', 'new');
newImg.src = './images/Newversion.png';
let newtext = crearContenido('p', 'class', 'newtext');
newtext.textContent='Accede desde el marco a la nueva opción';
div2.append(newImg, newtext);

let section4 = crearContenido('div', 'class', 'section4');
container.append(section4);

let titulo2 = crearContenido('h2', 'class', 'titulo2');
titulo2.innerHTML='Nuestra página de soporte ha <span>evoluvionado</span>';
let circle = crearContenido('img', 'class', 'circle');
circle.src='./images/Circle.svg';
let person = crearContenido('img', 'class', 'person');
person.src='./images/Person.svg';

section4.append(titulo2, circle, person);



