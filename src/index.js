import {home} from './home'
import menu from './menu'
import './css/index.css'
import './css/home.css'
import './css/menu.css'
const app = document.createElement('div');
app.setAttribute('id', 'content');

document.body.appendChild(app);
app.appendChild(home());
app.appendChild(menu());
