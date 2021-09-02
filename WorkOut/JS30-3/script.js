const aTags = document.querySelectorAll("p");
const hightlight = document.createElement("span");
hightlight.classList.add("highlight");
document.body.appendChild(hightlight);

for (let i = 0; i < aTags.length; i++){
    aTags[i].addEventListener('mouseenter', function (){
        const linkCoords = this.getBoundingClientRect();
        const coords = {
            
            with: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX,
        };

        hightlight.style.width = `${coords.width}px`;
        hightlight.style.height = `${coords.height}px`;
        hightlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
        this.style.transform = `scale(3)`;

        
    });

};