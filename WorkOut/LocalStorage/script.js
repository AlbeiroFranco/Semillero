let aIsbn = [],
    aTitulo = [],
    aAutor = [],
    aEditor = [],
    aAno = [];

    if (localStorage.getItem('isbn_libros') != null) {
        aIsbn = JSON.parse(localStorage.getItem('isbn_libros'));

        aTitulo = JSON.parse(localStorage.getItem('titulo_libros')),
        aAutor = JSON.parse(localStorage.getItem('autor_libros')),
        aEditor = JSON.parse(localStorage.getItem('editor_libros')),
        aAno = JSON.parse(localStorage.getItem('ano_libro'));
    }

let boton = document.querySelector('#botonRegistrar');

boton.addEventListener('click', registrarLibro);

function registrarLibro() {

    let nIsbn = document.querySelector('#txtIsbn').value,
        sTitulo = document.querySelector('#txtTitulo').value,
        sAutor = document.querySelector('#txtAutor').value,
        sEditor = document.querySelector('#txtEditor').value,
        nAno = document.querySelector('#txtAno').value;

        aIsbn.push(nIsbn),
        aTitulo.push(sTitulo),
        aAutor.push(sAutor),
        aEditor.push(sEditor),
        aAno.push(nAno);

        localStorage.setItem('isbn_libros', JSON.stringify(aIsbn));
        localStorage.setItem('titulo_libros', JSON.stringify(aTitulo));
        localStorage.setItem('autor_libros', JSON.stringify(aAutor));
        localStorage.setItem('editor_libros', JSON.stringify(aEditor));
        localStorage.setItem('ano_libro', JSON.stringify(aAno));
        

        llenarTabla()
    }