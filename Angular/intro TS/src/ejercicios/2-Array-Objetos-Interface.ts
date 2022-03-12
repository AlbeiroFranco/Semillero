/*
    ===== Código de TypeScript =====
*/

// [] = Arreglo vacio !!Importante
// {} = Objeto  !!Importante


let habilidades: string[]= ['Bash', 'Counter', 'Healing']; //Siempre es mejor colocar el tipo de variable al que pertenece String, Number, Boolean... Etc

/* habilidades.push('Albeiro')
habilidades.push('Franco')

console.log(habilidades) */

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // ? = es opcional

    /* imprimirNombre: () => string; //Solo se puede definir de que tipo es la funcion */
}

const personaje: Personaje = {
    nombre: 'Jose',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje)