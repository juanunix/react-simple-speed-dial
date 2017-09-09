import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import { Router } from 'react-router';

import Store from './store/store.js';
import AppContainer from './components/AppContainer.jsx';
import './App.css';
import '../node_modules/bulma/css/bulma.css';

export default class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <AppContainer></AppContainer>
        </Provider>
    );
  }
}
