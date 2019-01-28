import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/redux/index';
import Form from './components/Form/Index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
};

export default App;
