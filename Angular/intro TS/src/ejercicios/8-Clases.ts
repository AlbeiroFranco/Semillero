/*
    ===== Código de TypeScript =====
*/

/* class Heroe{
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;
    // tipos de clases 
} */

/* class Heroe{
    alterEgo: string;
    edad: number;
    nombreReal: string;

    constructor( alterEgo: string, edad: number){
        this.alterEgo = alterEgo;
        this.edad = edad;
    }
} */// esta es una manera con la que se hace pero es habitual

class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
        ){}
}



class Heroe extends PersonaNormal{ // Esta forma es la mas comun

    constructor( 
        public alterEgo: string,
        public edad?: number, // ? = OPCIONAL --------
        public nombreReal?: string
        ){
            super(nombreReal, 'NY , USA');
        }
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman); 








