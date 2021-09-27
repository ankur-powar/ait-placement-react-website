import React from 'react';
import ReactDOM from 'react-dom';
import Student from './pages/student';
import Admin from './pages/admin';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
  <React.StrictMode >
      <Student />
  </React.StrictMode>,
  document.getElementById('root')
);