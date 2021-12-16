class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event =>{
            if(!confirm('Realmente quiere salir?')){
                event.preventDefault();
            }
        });
    }
}

customElements.define('ar-confirm-link', ConfirmLink, {extends: 'a'})