const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octube', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('fecha');
let month = document.getElementById('mes');
let year = document.getElementById('año');

month.textContent = monthNames[monthNumber]; 
year.textContent = currentYear.toString();

function startDay() {
    let start = new Date(currentYear, monthNumber, 1)
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function lastMonth() {
    if(monthNumber !== 11){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }
}

