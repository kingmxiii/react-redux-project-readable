import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
                reducer,
                composeEnhancers(
                  applyMiddleware(reduxThunk)
                ))

ReactDOM.render(
  <Provider store={store}>

      <App />

  </Provider>, document.getElementById('root'));
registerServiceWorker();
