/*
    ===== Código de TypeScript =====
*/
// Desestructuracion de Argumentos en una funcion

// Atajo para importar CTRL + .  !!Importante

import { calculaISV, Producto } from "./6-Desestructuracion-Function";

const carritoCompras: Producto[] = [
    {
        desc:'Telefono 1',
        precio: 100
    },
    {
        desc:'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras);

console.log('Total' , total);
console.log('ISV', isv);
