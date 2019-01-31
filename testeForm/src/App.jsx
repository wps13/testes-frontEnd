import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home/Index';
import Login from './components/Login/Index';
import SignUp from './components/SignUp/Index';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" root component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  );
};

export default App;
