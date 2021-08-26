const form = document.getElementById('formulario');
const fname= document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(firstName === ''){
        errorFunc(fname, 'First Name cannot be empty');
    }
    else{
        successFunc(fname);
    }

    if(lastName === ''){
        errorFunc(lname, 'First Name cannot be empty');
    }
    else{
        successFunc(lname);
    }

    if(emailValue === ''){
        errorFunc(email, 'First Name cannot be empty');
    }
    else{
        successFunc(email);
    }

    if(passwordValue === ''){
        errorFunc(password, 'First Name cannot be empty');
    }
    else{
        successFunc(password);
    }

   
});

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className += 'error' ;
    span.className += 'error-text';
};

function successFunc(req){
    req.className += 'success';
}

