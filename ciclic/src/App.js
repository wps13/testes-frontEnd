import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import FormSimulation from "./containers/FormSimulation";

import reducer from "./store/ducks/simulation";

import "./App.css";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FormSimulation />
      </Provider>
    );
  }
}

export default App;
