import React from 'react';
import Cart from './components/Cart';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shipping from './components/Shipping';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/shipping" render={() => <Shipping />} />
        <Redirect from='*' to='/cart' />
      </Switch>

    </div>
  );
}

export default App;
