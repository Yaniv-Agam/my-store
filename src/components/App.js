import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header.js';
import Landing from './Landing';
// import Ingredients from './Ingredients';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

class App extends Component {

  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact name="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);
