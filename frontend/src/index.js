/* eslint-disable functional/no-expression-statement */

import ReactDOM from 'react-dom/client';
import init from './app/init.js';
import './app/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(await init());
