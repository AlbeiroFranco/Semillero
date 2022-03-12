/*
    ===== Código de TypeScript =====
*/

/* function sumar(a: number, b: number): number {

    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {  // funcion tipo flecha
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2):number {
    return numero * base
} */
/* 
const resultado = sumar(22, 40); */

/* const resultado = multiplicar(5, 10); 

console.log(resultado) */

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function curar( personaje: PersonajeLOR, curarX:number): void {
    personaje.pv += curarX;
    console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Jose',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de Vida:', this.pv)
    }    
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp()


