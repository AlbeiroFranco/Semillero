llenarTabla()


function llenarTabla() {
    let tbody = document.querySelector('#tbinfor tbody');

    tbody.innerHTML = '';

    let ingresarCodigo = JSON.parse(localStorage.getItem('codigo_insert')),
        ingresarDescripcion = JSON.parse(localStorage.getItem('descripcion_insert')),
        ingresarMaximo = JSON.parse(localStorage.getItem('Maximo_insert')),
        ingresarMinimo = JSON.parse(localStorage.getItem('Minimo_insert'));
        

    let nCodigo = ingresarCodigo.length;

    for (let i = 0; i < nCodigo; i++) {
        let fila = document.createElement('tr');

        let celdaCodigo = document.createElement('td'),
            celdaDescripcion = document.createElement('td'),
            celdaMaximo = document.createElement('td'),
            celdaMinimo = document.createElement('td');

        let nodoTextoCodigo = document.createTextNode(ingresarCodigo[i]),
            nodoTextoDescripcion = document.createTextNode(ingresarDescripcion[i]),
            nodoTextoMaximo = document.createTextNode(ingresarMaximo[i]),
            nodoTextoMinimo = document.createTextNode(ingresarMinimo[i]);
            
        celdaCodigo.appendChild(nodoTextoCodigo);
        celdaDescripcion.appendChild(nodoTextoDescripcion);
        celdaMaximo.appendChild(nodoTextoMaximo);
        celdaMinimo.appendChild(nodoTextoMinimo);
        
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaDescripcion);
        fila.appendChild(celdaMaximo);
        fila.appendChild(celdaMinimo);
        

        tbody.appendChild(fila);

            
    }
        
}