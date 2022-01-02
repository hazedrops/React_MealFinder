import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing Sass with Bootstrap CSS
import './styles/style.scss';


ReactDOM.render(
  <React.StrictMode>
    <App className='app' />
  </React.StrictMode>,
  document.getElementById('root')
);
