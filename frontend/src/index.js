/* eslint-disable functional/no-expression-statement */

import ReactDOM from 'react-dom/client';
import { initApp } from './app';
import './app/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(await initApp());
