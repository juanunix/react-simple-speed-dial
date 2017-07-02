import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Modals from './components/modals/Modals.jsx';
import BookmarksGrid from './components/BookmarksGrid.jsx';
import NewBookmarkModal from './components/modals/NewBookmarkModal.jsx';
import DeleteBookmarkModal from './components/modals/DeleteBookmarkModal.jsx';
import Store from './store/store.js';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <div className="app-container">
                <h1>Simple Speed Dial</h1>
                <Modals/>
            </div>
        </Provider>

    );
  }
}

export default App;
