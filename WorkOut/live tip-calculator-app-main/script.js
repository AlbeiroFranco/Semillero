let crearContenido = function (etiq, tipo, nombre) {
    let contenido = document.createElement(etiq);
    contenido.setAttribute(tipo, nombre);
    return contenido;
  };
  
  let main = document.createElement("main", "id", "main");
  document.body.append(main);
  
  let article = document.createElement("article");
  main.append(article);
  
  let section1 = crearContenido("section", "class", "derecha");
  article.append(section1);
  
  let total = crearContenido("div", "class", "bill");
  section1.append(total);
  
  let bill = document.createElement("span");
  bill.innerText = "Bill";
  total.append(bill);
  
  let billinput = crearContenido("input", "id", "billinput");
  billinput.type = "text";
  billinput.placeholder = "0";
  total.append(billinput);
  
  let selectTip = crearContenido("div", "class", "tip");
  section1.append(selectTip);
  
  let tip = document.createElement("span");
  tip.innerText = "Select Tip %";
  selectTip.append(tip);
  
  let cantip = crearContenido("div", "class", "cantip");
  selectTip.append(cantip);
  
  let box1 = crearContenido("input", "id", "box1");
  box1.type = "submit";
  box1.value = "5%";
  cantip.append(box1);
  
  let box2 = crearContenido("input", "id", "box2");
  box2.type = "submit";
  box2.value = "10%";
  cantip.append(box2);
  
  let box3 = crearContenido("input", "id", "box3");
  box3.type = "submit";
  box3.value = "15%";
  cantip.append(box3);
  
  let box4 = crearContenido("input", "id", "box4");
  box4.type = "submit";
  box4.value = "25%";
  cantip.append(box4);
  
  let box5 = crearContenido("input", "id", "box5");
  box5.type = "submit";
  box5.value = "50%";
  cantip.append(box5);
  
  let box6 = crearContenido("input", "id", "box6");
  box6.type = "text";
  box6.placeholder = "Custom";
  cantip.append(box6);
  
  let canPeople = crearContenido("div", "class", "people");
  section1.append(canPeople);
  
  let people = crearContenido("span", "class", "people");
  people.innerHTML = "Number of People &emsp; &emsp; &emsp; &ensp; Can't be zero";
  canPeople.append(people);
  
  let inpZero = crearContenido("input", "id", "inpZero");
  inpZero.type = "text";
  inpZero.placeholder = "0";
  canPeople.append(inpZero);
  
  let section2 = crearContenido("section", "class", "izquierda");
  article.append(section2);
  
  let aside = document.createElement("aside");
  section2.append(aside);
  
  let tipA = crearContenido("div", "class", "tipAmount");
  let tipB = crearContenido("div", "class", "total");
  aside.append(tipA, tipB);
  
  let tipA1 = crearContenido("span", "class", "tipA1");
  tipA1.innerHTML = "Tip Amount<br> / person";
  let tipA2 = crearContenido("span", "id", "tipA2");
  tipA2.innerText = "0";
  tipA.append(tipA1, tipA2);
  
  let tipB1 = crearContenido("span", "class", "tipB1");
  tipB1.innerHTML = "Total <br> / person";
  let tipB2 = crearContenido("span", "id", "tipB2");
  tipB2.innerText = "0";
  tipB.append(tipB1, tipB2);
  
  let reset = crearContenido("input", "id", "reset");
  reset.type = "submit";
  reset.value = "RESET";
  aside.append(reset);
  
  //Calculate Tip
  function calculateTip() {
    let bill = billinput.value;
    let people = inpZero.value;
    let total1 = (bill * porcentaje) / people;
    let total2 = parseInt(total1) + parseInt(bill);
  
    document.getElementById("tipA2").innerText = "$" + total1;
    document.getElementById("tipB2").innerText = "$" + total2;
  }
  
  let porcentaje;
  
  //click
  box1.onclick = function () {
    porcentaje = 0.05;
    calculateTip();
  };
  
  box2.onclick = function () {
    porcentaje = 0.1;
    calculateTip();
  };
  
  box3.onclick = function () {
    porcentaje = 0.15;
    calculateTip();
  };
  
  box4.onclick = function () {
    porcentaje = 0.25;
    calculateTip();
  };
  
  box5.onclick = function () {
    porcentaje = 0.5;
    calculateTip();
  };
  
  reset.onclick = function () {
    billinput.value = "";
    inpZero.value = "";
  };