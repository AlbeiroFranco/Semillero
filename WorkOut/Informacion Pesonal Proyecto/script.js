import { datos } from "./datos.js";

const sperfil = document.querySelector('.insertar');
const campos = [...document.querySelectorAll('h2')];
const cambiar = document.querySelector('.container');
const ocultar = document.querySelector('#informacion');
const ocultar1 = document.querySelector('#perfil');


let completa = function(texto,){
    let infoCompleta = document.createElement('p');
    infoCompleta.textContent=texto;
    return infoCompleta;
}

ocultar.addEventListener('click' , () =>{
    sperfil.classList.toggle('active');
    cambiar.classList.remove('active');
})

ocultar1.addEventListener('click', () =>{
    sperfil.classList.remove('active');
    cambiar.classList.toggle('active');
})


campos.forEach( perfil => {
    perfil.addEventListener('click', () => {
        console.log(perfil);
        sperfil.innerHTML = '';
        if(perfil.id === 'perfil'){
            insertarPerfil(datos[0]);
        }else if(perfil.id === 'estudios'){
            insertarEstudios(datos[1]);
        }else if (perfil.id === 'pasatiempos'){
            insertarPasatiempos(datos[2]);   
        }else if (perfil.id === 'proyectos'){
            insertarProyectos(datos[3]);

        }else{
            (configuracion === 'configuracion');
            insertarConfiguracion(datos[4]);
        }    
                        
    })
})


let insertarPerfil = function (dato){

    let clase = document.createElement('h4');
    clase.textContent='MI PERFIL';
    sperfil.append(clase);
        
    let nombre1 = completa('Nombre: '+ dato.nombre);
    sperfil.append(nombre1);

    let apellido1 = completa('Apellido: ' + dato.apellido);
    sperfil.append(apellido1);

    let estatura1 = completa('Estatura: ' + dato.estatura);
    sperfil.append(estatura1);

    let edad1 = completa('Edad: ' + dato.edad);
    sperfil.append(edad1);

    let correo1 = completa('Correo: ' + dato.correo);
    sperfil.append(correo1);

    let direccion1 = completa('Direccion: ' + dato.direccion);
    sperfil.append(direccion1);

    let fechaNacimiento1 = completa('Fecha de Naciemiento: '+ dato.fechaNaciemiento);
    sperfil.append(fechaNacimiento1);

    let profesion1 = completa('Profesion: ' + dato.profesion);
    sperfil.append(profesion1);

};

let insertarEstudios = function(dato){

    let clase1 = document.createElement('h4');
    clase1.textContent='MIS ESTUDIOS';
    sperfil.append(clase1);
    
    let basicos = completa('Basicos: ' + dato.basicos);
    sperfil.append(basicos);

    let universidad = completa('Universidad: ' +dato.universidad);
    sperfil.append(universidad);

    let diplomados = completa('Diplomados: ' + dato.diplomados);
    sperfil.append(diplomados);

    let master = completa('Master: '+ dato.master);
    sperfil.append(master);
}

let insertarPasatiempos = function(dato){

    let clase2 = document.createElement('h4');
    clase2.textContent='MIS PASATIEMPOS';
    sperfil.append(clase2);
    
    let videos = completa('Video Juegos: '+ dato.videoJuegos);
    sperfil.append(videos);

    let mesa = completa('Juegos de Mesa: '+ dato.juegosMesa);
    sperfil.append(mesa);

    let practica = completa('Juegos de Practica: '+ dato.practica);
    sperfil.append(practica);

}

let insertarProyectos = function(dato){

    let clase3 = document.createElement('h4');
    clase3.textContent= 'PROYECTOS';
    sperfil.append(clase3);
    
    let proyecto1 = completa('Proyecto principal: '+ dato.proyecto1);
    sperfil.append(proyecto1);

    let proyecto2 = completa('Proyecto secundario: '+ dato.proyecto2);
    sperfil.append(proyecto2);


}

let insertarConfiguracion = function(dato){

    let clase3 = document.createElement('h4');
    clase3.textContent= 'CONFIGURACION';
    sperfil.append(clase3);

    let cuenta = completa(dato.cuenta);
    sperfil.append(cuenta);

    let general = completa(dato.general);
    sperfil.append(general);

    let privacidad = completa(dato.privacidad);
    sperfil.append(privacidad);

    let notificacion = completa(dato.notificacion);
    sperfil.append(notificacion);
}   

