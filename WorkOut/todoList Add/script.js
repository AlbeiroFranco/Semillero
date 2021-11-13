document.getElementById('agregar').addEventListener('click', () => {
    let nuevo = [];
    Array.from(document.querySelectorAll('#tareaNueva')).map((e) => {
        if (e.value == '') {
            alert('Completa los campos')
        } else {
            nuevo.push(e.value);
        }
    })
    localStorage.setItem(localStorage.length + 1, JSON.stringify(nuevo));
    
});   









