import React, 
       { Component }   from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './public/src/reducers/root';

import App from './public/src/components/App';

import './public/styles/main.scss';

let store = createStore(rootReducer);

render(<Provider store={store}>
         <App />
       </Provider>, document.getElementById('app'))
