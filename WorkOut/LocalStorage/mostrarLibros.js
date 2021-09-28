llenarTabla()


function llenarTabla() {
    let tbody = document.querySelector('#tblibros tbody');

    tbody.innerHTML = '';

    let aIsbn = JSON.parse(localStorage.getItem('isbn_libros')),
        aTitulo = JSON.parse(localStorage.getItem('titulo_libros')),
        aAutor = JSON.parse(localStorage.getItem('autor_libros')),
        aEditor = JSON.parse(localStorage.getItem('editor_libros')),
        aAno = JSON.parse(localStorage.getItem('ano_libro'));

    let nCantidad = aIsbn.length;

    for (let i = 0; i < nCantidad; i++) {
        let fila = document.createElement('tr');

        let celdaIsbn = document.createElement('td'),
            celdaTitulo = document.createElement('td'),
            celdaAutor = document.createElement('td'),
            celdaEditor = document.createElement('td'),
            celdaAno = document.createElement('td');

        let nodoTextoIsbn = document.createTextNode(aIsbn[i]),
            nodoTextoTitulo = document.createTextNode(aTitulo[i]),
            nodoTextoAutor = document.createTextNode(aAutor[i]),
            nodoTextoEditor = document.createTextNode(aEditor[i]),
            nodoTextoAno = document.createTextNode(aAno[i]);

        celdaIsbn.appendChild(nodoTextoIsbn);
        celdaTitulo.appendChild(nodoTextoTitulo);
        celdaAutor.appendChild(nodoTextoAutor);
        celdaEditor.appendChild(nodoTextoEditor);
        celdaAno.appendChild(nodoTextoAno);



        fila.appendChild(celdaIsbn);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaEditor);
        fila.appendChild(celdaAno);

        tbody.appendChild(fila);

            
    }
        
}