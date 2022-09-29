import {home} from './home'
import './index.css'
import './home.css'
const app = document.createElement('div');
app.setAttribute('id', 'content');

document.body.appendChild(app);
app.appendChild(home())
