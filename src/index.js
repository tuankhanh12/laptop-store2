import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles/style.css'; 

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
