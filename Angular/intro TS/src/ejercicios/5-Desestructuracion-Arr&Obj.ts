interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015

    }
}

//DESESTRUCTURAR
/* const { volumen, segundo, cancion, detalles:{ autor } } = reproductor; */ //se puede pero no es recomendable
const { volumen, segundo, cancion, detalles} = reproductor
const { autor } = detalles 

/* console.log('El volumen actual es:  ', volumen)
console.log('El segundo actual es:  ', segundo)
console.log('El canción actual es:  ', cancion)
console.log('El autor actual es:  ', autor) */


const dbz: string[] = [ 'Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3  ] = dbz;// asi en cada P se asigna la posicion del arreglo
//const [ , , p3  ] = dbz;// asi en cada posicion vacia tambien se asigna la posicion del arreglo

console.log('Personaje 1', dbz[0])
console.log('Personaje 2', dbz[1])
console.log('Personaje 3', dbz[2])

console.log('Personaje 1', p1)
console.log('Personaje 2', p2)
console.log('Personaje 3', p3)