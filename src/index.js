import {home} from './home'
import './css/index.css'
import './css/home.css'
const app = document.createElement('div');
app.setAttribute('id', 'content');

document.body.appendChild(app);
app.appendChild(home())
