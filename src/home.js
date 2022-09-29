import coverUrl from './images/cover.png'
import msgiconUrl from './images/message-icon.png'

export function home() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.appendChild(header());
    home.appendChild(hero());
    home.appendChild(cover());
    return home
}

function header (){
    // Create Element
    const header = document.createElement('header');
    const titleWrapper = document.createElement('div');
    const nav = document.createElement('nav');
    // Title Wrapper
    titleWrapper.classList.add('title-wrapper');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    h2.textContent = 'Sweet';
    h3.textContent = 'Creme';
    titleWrapper.appendChild(h2);
    titleWrapper.appendChild(h3);
    header.appendChild(titleWrapper);
    //Navbar
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');
    homeLink.textContent = 'Home'
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Find us';
    homeLink.setAttribute('href', '#');
    menuLink.setAttribute('href', '#');
    contactLink.setAttribute('href', '#');
    nav.appendChild(homeLink)
    nav.appendChild(menuLink)
    nav.appendChild(contactLink)
    header.appendChild(nav)
    // Message Icon
    const messageIcon = new Image();
    messageIcon.src = msgiconUrl;
    header.appendChild(messageIcon);
    return header;
}

function hero(){
    const hero = document.createElement('div');
    hero.classList.add('hero');
    // H1 Tag
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Celebrate your sweet <br> moments with our creme';
    hero.appendChild(h1);
    // Button-wrapper
    let div = document.createElement('div');
    // Buttons
    let menuBTn = document.createElement('button');
    let contactBTn = document.createElement('button');
    menuBTn.classList.add('menu-btn')
    contactBTn.classList.add('contact-btn')
    menuBTn.textContent = 'Menu';
    contactBTn.textContent = 'Find us';
    div.appendChild(menuBTn)
    div.appendChild(contactBTn)
    hero.appendChild(div);
    return hero
}

function cover (){
    const coverWrapper = document.createElement('div');
    coverWrapper.classList.add('cover-wrapper');
    const coverImg = new Image();
    coverImg.src = coverUrl;
    coverImg.classList.add('cover');
    coverWrapper.appendChild(coverImg);
    return coverWrapper;
}