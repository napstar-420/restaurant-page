import logoUrl from './images/logo.png';

export default function menuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');
    menuPage.appendChild(header())
    menuPage.appendChild(menuWrapper())
    return menuPage;
}

function header() {
    const header = document.createElement('div');
    header.classList.add('menu-header');
    // Title
    const title = document.createElement('h2');
    title.classList.add('menu-heading');
    title.textContent = 'Menu';
    // Sub Title
    const subTitle = document.createElement('p');
    subTitle.classList.add('menu-subheading');
    subTitle.textContent = 'Choose from a wide variety of taste';
    // Append Child
    header.appendChild(title)
    header.appendChild(subTitle)
    return header;
}

const menuItems = {
    heavyDutyTreats: [
        {name: 'tutti fruiti', price: '420'},
        {name: 'banana split', price: '420'},
        {name: 'super sonic sundae', price: '420'},
        {name: 'triple fudge brownie', price: '260'},
        {name: 'brownie + ice Cream', price: '220'},
    ],
    hotMenu: [
        {name: 'cardamom Tea', price: '100'},
        {name: 'cappuccino', price: '180'},
        {name: 'latte', price: '180'},
        {name: 'hot chocolate', price: '250'},
        {name: 'brownie', price: '110'},
    ],
    shakes: [
        {name: 'vanilla', price: '250'},
        {name: 'chocolate', price: '250'},
        {name: 'choco-vanilla', price: '250'},
        {name: 'oreo', price: '250'},
        {name: 'mini-oreo', price: '250'},
        {name: 'mint', price: '250'},
        {name: 'mint choco-chip', price: '250'},
        {name: 'peanut butter', price: '250'},
        {name: 'caramel', price: '250'},
        {name: 'strawberry cheesecake', price: '250'},
        {name: 'choco strawberry', price: '250'},
        {name: 'blue berry', price: '250'},
        {name: 'bananan', price: '250'},
        {name: 'hazelnut', price: '250'},
    ],
    cones: [
        {name: 'vanilla cone', price: '80'},
        {name: 'choco top', price: '120'},
        {name: 'waffle cone', price: '110'},
        {name: 'waffle dip cone', price: '180'},
        {name: 'oreo waffle', price: '150'},
    ],
    cup: [
        {name: 'vanilla cup', price: '110'},
        {name: 'choco dip cup', price: '150'},
        {name: 'waffle dip cup', price: '160'},
    ],
    sundaes: [
        {name: 'choco fudge', price: '190'},
        {name: 'hazelnut', price: '190'},
        {name: 'cookie butter', price: '190'},
        {name: 'white chocolate', price: '190'},
        {name: 'strawberry', price: '190'},
        {name: 'blue berry', price: '190'},
        {name: 'caramel', price: '190'},
        {name: 'vanilla', price: '190'},
        {name: 'honey', price: '190'},
    ]
}



function menuWrapper() {
    const menu = document.createElement('div');
    menu.classList.add('menu-wrapper');
    // for sub menu
    const heavyDutyMealsWrapper = document.createElement('ul');
    const hotMenuWrapper = document.createElement('ul');
    const shakesWrapper = document.createElement('ul');
    const conesWrapper = document.createElement('ul');
    const cupWrapper = document.createElement('ul');
    const sundaesWrapper = document.createElement('ul');
    // creating columns
    const column1 = document.createElement('div');
    const column2 = document.createElement('div');
    const column3 = document.createElement('div');
    column1.classList += 'column column1';
    column2.classList += 'column column2';
    column3.classList += 'column column3'
    // adding logo
    const logo = new Image();
    logo.src = logoUrl;
    column1.appendChild(logo)
    // creating sub menu's
    column1.appendChild(createSubMenu(menuItems.heavyDutyTreats, heavyDutyMealsWrapper, 'Heavy duty meals'));
    column1.appendChild(createSubMenu(menuItems.cup, cupWrapper, 'Cup'));
    column2.appendChild(createSubMenu(menuItems.shakes, shakesWrapper, 'Shakes'));
    column2.appendChild(createSubMenu(menuItems.hotMenu, hotMenuWrapper, 'Hot menu'));
    column3.appendChild(createSubMenu(menuItems.cones, conesWrapper, 'Cones'));
    column3.appendChild(createSubMenu(menuItems.sundaes, sundaesWrapper, 'Sundaes'));
    // appending columns
    menu.appendChild(column1);
    menu.appendChild(column2);
    menu.appendChild(column3);
    return menu;
}

function createSubMenu(array, wrapper, heading) {
    let h2 = document.createElement('h2');
    h2.textContent = heading;
    wrapper.appendChild(h2);
    wrapper.classList.add('sub-menu')
    array.map((item) => {
        let li =  document.createElement('li');
        li.innerHTML = `${item.name} <span>Rs. ${item.price}</span>`;
        wrapper.appendChild(li);
    })
    return wrapper;
}