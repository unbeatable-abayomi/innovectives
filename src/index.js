import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import{createStore} from 'redux';
import reducers from './reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
