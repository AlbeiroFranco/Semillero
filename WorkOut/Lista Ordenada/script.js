const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function quitar(nombre){
    return nombre.replace(/(a |the |an )/i, '').trim();
}

/*const bandsOrdenado = bands.sort(function(a,b){
    if(quitar(a)>quitar(b)){
        return;
    }
    return -1;
});*/

const bandsOrdenado = bands.sort((a,b)=>quitar(a)>quitar(b)?1:-1);

document.querySelector('#bands').innerHTML= 
bandsOrdenado.map(elemento=>`<li>${elemento}</li>`).join('');









//sort: devuelve un array ordenado arreglo.sort(a,b)=>a-b);
// .map(elemento => elemento + 1) 