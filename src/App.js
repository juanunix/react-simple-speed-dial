import React, { Component } from 'react';
import {Provider} from 'react-redux';

import BookmarksGrid from './components/BookmarksGrid.jsx';
import NewBookmarkModal from './components/modals/NewBookmarkModal.jsx';
import Store from './store/store.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <div className="app-container">
                <h1>Simple Speed Dial</h1>
                <BookmarksGrid/>
                <NewBookmarkModal/>
            </div>
        </Provider>

    );
  }
}

export default App;
