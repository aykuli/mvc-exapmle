import './style.css';

import Controller from './Controller';
import View from './View';
import Model from './Model';

const view = new View();
const model = new Model();
const app = new Controller(view, model);
