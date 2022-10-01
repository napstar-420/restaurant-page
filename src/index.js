import {home} from './home'
import menu from './menu'
import contact from './contact.js'
import './css/index.css'
import './css/home.css'
import './css/menu.css'
import './css/contact.css'
const app = document.createElement('div');
app.setAttribute('id', 'content');

document.body.appendChild(app);
app.appendChild(home());
app.appendChild(menu());
app.appendChild(contact())
