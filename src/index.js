import {home} from './home'
import menu from './menu'
import contact from './contact.js'
import header from './header'
import './css/index.css'
import './css/home.css'
import './css/menu.css'
import './css/contact.css'

const app = document.createElement('div');
app.setAttribute('id', 'content');
document.body.appendChild(app);
app.appendChild(header())
app.appendChild(home());
const homeLink = document.getElementById('homeLink');
const menuLink = document.getElementById('menuLink');
const contactLink = document.getElementById('contactLink');
homeLink.addEventListener('click', routeToHome)
menuLink.addEventListener('click', routeToMenu)
contactLink.addEventListener('click', routeToContact)

// PLease ignore the logic of my routeTo functions i will improve them later

function routeToHome() {
    app.innerHTML = "";
    app.appendChild(header())
    app.appendChild(home())
    
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');
    homeLink.addEventListener('click', routeToHome)
    menuLink.addEventListener('click', routeToMenu)
    contactLink.addEventListener('click', routeToContact)
}

export function routeToMenu() {
    app.innerHTML = "";
    app.appendChild(header())
    app.appendChild(menu())

    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');
    homeLink.addEventListener('click', routeToHome)
    menuLink.addEventListener('click', routeToMenu)
    contactLink.addEventListener('click', routeToContact)
}

export function routeToContact() {
    app.innerHTML = "";
    app.appendChild(header())
    app.appendChild(contact())
    
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');
    homeLink.addEventListener('click', routeToHome)
    menuLink.addEventListener('click', routeToMenu)
    contactLink.addEventListener('click', routeToContact)
}




