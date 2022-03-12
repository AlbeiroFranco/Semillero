/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Jose'
}

const pasajero2: Pasajero = {
    nombre: 'Carlos',
    hijos: ['Lukas', 'Luna']
}

function imprimeHijos(pasajero: Pasajero): void {
    
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos)
}

imprimeHijos(pasajero1)













