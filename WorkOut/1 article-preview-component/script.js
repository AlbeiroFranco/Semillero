const body=document.body;
let container = document.createElement('main'),
imgPrin = document.createElement('img'),
article= document.createElement('article'),
section = document.createElement('section'),
title = document.createElement('h1'),
textTittle = document.createElement('p'),
footer = document.createElement('footer'),
asideFooter = document.createElement('aside'),
imgPerson = document.createElement('img'),
divPerson = document.createElement('div'),
namePerson = document.createElement('h2'),
date = document.createElement('p'),
iconShare = document.createElement('img');

imgPrin.setAttribute("class", "img1");
imgPrin.src="images/drawers.jpg";
title.innerText= "Shift the overall look and feel by adding these wonderful touches to furniture  in your home"
textTittle.innerText= "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
imgPerson.setAttribute("class", "img2");
imgPerson.src="images/avatar-michelle.jpg"
namePerson.innerText= "Michelle Appleton";
date.setAttribute("class", "date");
date.innerText= "28 jun 2020";
iconShare.setAttribute("class", "icon");
iconShare.src="images/favicon-32x32.png";


body.append(container);
container.append(imgPrin, article);
article.append(section, footer);
section.append(title,textTittle);
footer.append(asideFooter, iconShare);
asideFooter.append(imgPerson, divPerson);
divPerson.append(namePerson, date);





