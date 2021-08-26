const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "usuario":
            if (expresiones.usuario.test(e.target.value)){
            
            }
            else{
                document.getElementsByClassName('error-active')
            }

        break;

        case "lastname":
         
        break;

        case "email":
         
        break;

        case "pasword":
         
        break;
    }
        
}

input.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario );
    input.addEventListener('blur',validarFormulario );
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
});
