const controlMaquina = document.querySelector('#controlMaquina');
const mantenimiento = document.querySelector('#mantenimiento');
const tarifas = document.querySelector('#tarifas');
const combustible = document.querySelector('#combustible');
const neumaticos = document.querySelector('#neumaticos');

controlMaquina.addEventListener('click', ()=>{
    controlMaquina.classList.add('active');
    mantenimiento.classList.remove('active');
    tarifas.classList.remove('active');
    combustible.classList.remove('active');
    neumaticos.classList.remove('active');
    document.querySelector('#controlMaquinaria').classList.remove('ocultar');
    document.querySelector('#controlMantenimiento').classList.add('ocultar');
    document.querySelector('#controlTarifas').classList.add('ocultar');
    document.querySelector('#controlNeumaticos').classList.add('ocultar');
    document.querySelector('#controlCombustible').classList.add('ocultar');
}) 

mantenimiento.addEventListener('click', ()=>{
    controlMaquina.classList.remove('active');
    mantenimiento.classList.add('active');
    tarifas.classList.remove('active');
    combustible.classList.remove('active');
    neumaticos.classList.remove('active');
    document.querySelector('#controlMaquinaria').classList.add('ocultar');
    document.querySelector('#controlMantenimiento').classList.remove('ocultar');
    document.querySelector('#controlTarifas').classList.add('ocultar');
    document.querySelector('#controlNeumaticos').classList.add('ocultar');
    document.querySelector('#controlCombustible').classList.add('ocultar');
}) 

tarifas.addEventListener('click', ()=>{
    controlMaquina.classList.remove('active');
    mantenimiento.classList.remove('active');
    tarifas.classList.add('active');
    combustible.classList.remove('active');
    neumaticos.classList.remove('active');
    document.querySelector('#controlMaquinaria').classList.add('ocultar');
    document.querySelector('#controlMantenimiento').classList.add('ocultar');
    document.querySelector('#controlTarifas').classList.remove('ocultar');
    document.querySelector('#controlNeumaticos').classList.add('ocultar');
    document.querySelector('#controlCombustible').classList.add('ocultar');
}) 

combustible.addEventListener('click', ()=>{
    controlMaquina.classList.remove('active');
    mantenimiento.classList.remove('active');
    tarifas.classList.remove('active');
    combustible.classList.add('active');
    neumaticos.classList.remove('active');
    document.querySelector('#controlMaquinaria').classList.add('ocultar');
    document.querySelector('#controlMantenimiento').classList.add('ocultar');
    document.querySelector('#controlTarifas').classList.add('ocultar');
    document.querySelector('#controlNeumaticos').classList.add('ocultar');
    document.querySelector('#controlCombustible').classList.remove('ocultar');
}) 

neumaticos.addEventListener('click', ()=>{
    controlMaquina.classList.remove('active');
    mantenimiento.classList.remove('active');
    tarifas.classList.remove('active');
    combustible.classList.remove('active');
    neumaticos.classList.add('active');
    document.querySelector('#controlMaquinaria').classList.add('ocultar');
    document.querySelector('#controlMantenimiento').classList.add('ocultar');
    document.querySelector('#controlTarifas').classList.add('ocultar');
    document.querySelector('#controlNeumaticos').classList.remove('ocultar');
    document.querySelector('#controlCombustible').classList.add('ocultar');
}) 

let verNeumaticos = document.querySelector('#verNeumaticos');
verNeumaticos.addEventListener('click', ()=>{
    if (verNeumaticos.checked){
        neumaticos.classList.remove('ocultar')
    }else{
        neumaticos.classList.add('ocultar')
    }
})

let selector = document.querySelector('#opcionesControlPro')

selector.addEventListener('change', ()=>{
    if(selector.value == 'Combustible'){
        combustible.classList.remove('ocultar');
    }else{
        combustible.classList.add('ocultar');
    }
})

document.querySelector('.agregarMedidor').addEventListener('click', ()=>{
    document.querySelector('.agregarMedidor').classList.add('ocultar');
    document.querySelector('.quitarMedidor').classList.remove('ocultar');
    let agregarMedidor = Array.from(document.querySelectorAll('#contenidoMedidor'));
    agregarMedidor.forEach(element => {
        element.classList.remove('ocultar');
    });
})
document.querySelector('.quitarMedidor').addEventListener('click', ()=>{
    document.querySelector('.agregarMedidor').classList.remove('ocultar');
    document.querySelector('.quitarMedidor').classList.add('ocultar');
    let agregarMedidor = Array.from(document.querySelectorAll('#contenidoMedidor'));
    agregarMedidor.forEach(element => {
        element.classList.add('ocultar');
    });
})

document.querySelector('.agregarMedidor2').addEventListener('click', ()=>{
    let agregarMedidor2 = Array.from(document.querySelectorAll('#contenidoMedidor2'));
    agregarMedidor2.forEach(element => {
        element.classList.remove('ocultar');
    });
})

document.querySelector('.btnGuardar').addEventListener('click', ()=>{
    document.querySelector('.cuadroGuardado').classList.remove('ocultar');
    setTimeout( () => {
    document.querySelector('.cuadroGuardado').classList.add('ocultar');
},800)
})

