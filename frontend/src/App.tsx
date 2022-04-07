import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components

import { CartPage } from './pages/CartPage/CartPage';
import { MenuPage } from './pages/MenuPage/MenuPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/cart" component={CartPage} exact />
        <Route path="/menu" component={MenuPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
