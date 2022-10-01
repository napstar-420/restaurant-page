export default function createContactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');
    let h2 = document.createElement('h2');
    h2.textContent = 'Find us';
    contactPage.appendChild(h2);
    const section = document.createElement('section');
    section.appendChild(contact());
    section.appendChild(map())
    contactPage.appendChild(section)

    return contactPage;
}

function map() {
    const map = document.createElement('div');
    map.classList.add('map');
    map.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sweet creme allah hoo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://mcpenation.com/">MCPE Nation</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>`
    return map;
}

function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-wrapper');
    contact.appendChild(createContactOption('Main Branch', '+92-111-2223334'))
    contact.appendChild(createContactOption('Manager', '+92-111-2223334'))
    contact.appendChild(createContactOption('Order', '+92-111-2223334'))
    contact.appendChild(createContactOption('Website developer', 'Napstar'))
    return contact;
}

function createContactOption(title, number) {
    const contactOption = document.createElement('div');
    contactOption.classList.add('contact-option');
    let h3 =  document.createElement('h3');
    h3.textContent = title;
    let p = document.createElement('p');
    p.textContent = number;
    contactOption.appendChild(h3);
    contactOption.appendChild(p);
    return contactOption;
}