import msgiconUrl from './images/message-icon.png'

export default function header (){
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
    homeLink.setAttribute('id', 'homeLink');
    menuLink.setAttribute('id', 'menuLink');
    contactLink.setAttribute('id', 'contactLink');
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