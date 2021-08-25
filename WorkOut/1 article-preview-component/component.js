let crearImagen = funtion(){
    let imgPerson = document.createElement("img");
    imgPerson.setAttribute("class", "img2");
    imgPerson.src="images/avatar-michelle.jpg";
    return imgPerson;
}

let crearAvatar = function (insertar){
    let aside = createElement("aside");

    let divPerson = document.createElement("aside");
    aside.append(imgPerson);

    let namePerson = document.createElement("h2");
    namePerson.innerText = "Michelle Appleton";

    let date = document.createElement("p");
    date.innerText = "28 jun 2020";

} 

crearAvatar(footer);
    


const creaElementosLista = function(clase , src){
    let li = document.createElement("li");
    li.setAttribute("class", `${clase}`);
    li.setAttribute("src",`${src}`);    
    return li
}

creaElementosLista(share , "images/icon-document.svg"){
    let li = document.createElement("li");
    li.setAttribute("class", `${clase}`);
    li.setAttribute("src",`${src}`);
    return li
};


