import React, { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/Header.js';
import Landing from './landing/Landing';
import Ingredients from './ingredients/Ingredients';
import './App.css';

import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const globalState = {
  cart: [],
  totalAmount: 0,
  summeryCart: []
};

// const setItems = setState(() => {});

export const addItem = (item) => {
  // setState({cart: [...globalState.cart, item]});
  // setState({totalAmount: [globalState.totalAmount + item.price]});
  globalState.cart = [...globalState.cart, item];
  globalState.totalAmount += item.price
  let tmpItem = globalState.summeryCart.find(itm => itm.name === item.name);
  if (!tmpItem) {
    tmpItem = {...item};
    tmpItem['count'] = 1;
    globalState.summeryCart.push();
  } else {
    tmpItem['count'] += tmpItem['count'];
    tmpItem.price += item.price;
  }
  // setState({summeryCart: globalState.summeryCart});
}
export const removeItem = (item) => {
  // setState({cart: globalState.cart.splice(globalState.cart.indexOf(item),1)});
  // setState({totalAmount: [globalState.totalAmount - item.price]});
  globalState.cart.splice(globalState.cart.indexOf(item),1);
  globalState.totalAmount -= item.price
  const tmpItem = globalState.summeryCart.find(itm => itm.name === item.name);
  tmpItem.price -= item.price;
  tmpItem['count'] -= tmpItem['count'];
  if (tmpItem['count'] === 0) {
    globalState.summeryCart.splice(globalState.summeryCart.indexOf(tmpItem),1);
  }
  // setState({summeryCart: globalState.summeryCart});
}

const App = () => {
  PrimeReact.ripple = true;

  return (
    <React.Fragment>
      <Context.Provider value={globalState}>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <div className="mainBody">
                <Route exact path="/" component={Landing} />
                <Route exact path="/ingredients" component={Ingredients} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </Context.Provider>
    </React.Fragment>
    );
  };

export const Context = createContext(globalState);
export default App;
