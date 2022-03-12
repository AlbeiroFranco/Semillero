interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
} //Interface con objetos anidados

interface Direccion{ //Interface con objetos anidados y cuando se necesite para mas objetos anidados crear otra interface
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){ //Metodo
        return this.nombre + ', ' + this.direccion.pais + ', ' + this.direccion.ciudad;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);

superHeroe.direccion.calle
