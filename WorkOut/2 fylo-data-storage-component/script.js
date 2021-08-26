let crearContenido = function(dato,tipo,nombre){
    let contenido = document.createElement(dato);
    contenido.setAttribute(tipo,nombre);
    return contenido;
}


let aside = document.createElement('aside');
document.body.append(aside);

let logo = crearContenido ("div", "class", "logo");
aside.append(logo);

let imgLogo = crearContenido("img", "class", "imglogo");
imgLogo.src = "images/logo.svg";
logo.append(imgLogo);

let ul = document.createElement("ul");
logo.append(ul);

let li = crearContenido ("li","class","share");
ul.append(li);

let imgLi = document.createElement("img");
imgLi.src = "images/icon-document.svg";
li.append(imgLi);

let li1 = crearContenido ("li", "class", "share fol");
ul.append(li1);

let imgLi1 = document.createElement("img");
imgLi1.src = "images/icon-folder.svg";
li1.append(imgLi1);

let li2 = crearContenido ("li", "class", "share up");
ul.append(li2);

let imgLi2 = document.createElement("img");
imgLi2.src = "images/icon-upload.svg";
li2.append(imgLi2);

let storage = crearContenido ("div", "class", "storage");
aside.append(storage);

let para = document.createElement("p");
para.innerHTML = "You’ve used <b>815 GB</b> of your storage";
storage.append(para);

let slide = crearContenido ("div", "class", "slide");
storage.append(slide);

let bar = crearContenido("div", "class", "bar");
slide.append(bar);

let circle = crearContenido("div", "class","circle");
bar.append(circle);

let text = crearContenido("div", "class", "text");
storage.append(text);

let para1 = document.createElement("p");
para1.innerText = "0 GB";
text.append(para1);

let para2 = document.createElement("p");
para2.innerText = "1000 GB";
text.append(para2);

let gbdesktop = crearContenido("div", "class", "gbdesktop");
storage.append(gbdesktop);

let span1 = crearContenido("span", "class", "big");
span1.innerHTML = "<b>185</b> GB LEFT"
gbdesktop.append(span1);

let desktopimg1 = document.createElement("img");
desktopimg1.src= "images/gb.svg";
gbdesktop.append(desktopimg1);

let gbmovil = crearContenido("div", "class", "gbmovil");
storage.append(gbmovil);

let span2 = crearContenido("span", "class", "big");
span2.innerHTML = "<b>185</b> GB LEFT";
gbmovil.append(span2);

let desktopimg2 = document.createElement("img");
desktopimg2.src= "images/gb1.svg";
gbmovil.append(desktopimg2);






