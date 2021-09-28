import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Student from './pages/student';
import Admin from './pages/admin';
import Homepage from "./pages/homepage/Homepage";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/student" component={Student} />
        <Route  path="/admin" component={Admin} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
