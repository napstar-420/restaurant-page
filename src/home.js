import coverUrl from './images/cover.png'

export function home() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.appendChild(hero());
    home.appendChild(cover());
    return home
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