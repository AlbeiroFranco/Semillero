document.addEventListener('DOMContentLoaded', async () => {

    const imagenes = await fetch("./JSON/datos.json");
    const data = await imagenes.json();

    data.sort(() => 0.5 - Math.random());

    console.log(data);

    const insetarImagen = document.querySelector('#cardsMemoria');
    const resultDisplay = document.querySelector('#result');

    let tarjetasElegidas = []
    let tarjetasElegidasId = []
    let tarjetasIguales = []
  
  
    function crearTarjeta() {
      for (let i = 0; i < data.length; i++) {
        const card = document.createElement('img');
        card.src='./img/Card2.jpg';
        card.setAttribute('data-id', i);
        card.addEventListener('click', cartasSeleccionadas);
        insetarImagen.appendChild(card);
      }
    }
  
    
    function validacion() {
      const cards = document.querySelectorAll('img');
      const opcionUnoId = tarjetasElegidasId[0];
      const optionTwoId = tarjetasElegidasId[1];
      
      if(opcionUnoId == optionTwoId) {
        cards[opcionUnoId].src = './img/Card2.jpg';
        cards[optionTwoId].src = './img/Card2.jpg';
        alert('Seleccionaste la imagen dos veces');
      }
      else if (tarjetasElegidas[0] === tarjetasElegidas[1]) {
        alert('Las dos cartas son iguales');
        cards[opcionUnoId].removeEventListener('click', cartasSeleccionadas);
        cards[optionTwoId].removeEventListener('click', cartasSeleccionadas);
        tarjetasIguales.push(tarjetasElegidas);
      } else {
        cards[opcionUnoId].src = './img/Card2.jpg';
        cards[optionTwoId].src ='./img/Card2.jpg';
        alert('Vuelve a intentarlo');
      }

      tarjetasElegidas = []
      tarjetasElegidasId = []
      resultDisplay.textContent = tarjetasIguales.length;
      if  (tarjetasIguales.length === data.length/2) {
        resultDisplay.textContent = 'Felicidades Ganaste';
      }
    }
    

    function cartasSeleccionadas() {
      let cardId = this.getAttribute('data-id');
      tarjetasElegidas.push(data[cardId].name);
      tarjetasElegidasId.push(cardId);
      this.setAttribute('src', data[cardId].img);
      if (tarjetasElegidas.length ===2) {
        setTimeout(validacion, 500);
      }
    }
  
    crearTarjeta()
});

/* function crearTarjeta() {
    for (let i = 0; i < data.length; i++) {
       insetarImagen.innerHTML +=`
      <img src="./img/Card2.jpg">
      `
    } 
    let seleccionarTarjetas = Array.from(document.querySelectorAll('img'));
    seleccionarTarjetas.AddEventListener('click', ()=>{
        insertarImagen.innerHTML = `
            <img src="${data.img}">
        `
    })
  }  
  crearTarjeta();

 
  
  seleccionarTarjetas.forEach(element => {
      element.addEventListener('click', console.log('hola'))
  }); */