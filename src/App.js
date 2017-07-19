import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import Modals from './components/Modals.jsx';
import BookmarksGrid from './components/BookmarksGrid.jsx';
import DebugComponent from './components/config/DebugComponent';
import Store from './store/store.js';
import { Router } from 'react-router';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import ConfigWrapper from "./components/config/ConfigWrapper";

class App extends Component {
    constructor() {
        super();
        this.state = {
            bgImageUrl: ''
        }
    }
  render() {
    return (
        <Provider store={Store}>

            <div className="app-container container">
                <h1 style={{paddingTop: 25}} className="title">Simple Speed Dial</h1>
                <BookmarksGrid/>

                <Modals/>
                <ConfigWrapper/>
                <DebugComponent/>
            </div>
        </Provider>
    );
  }
}
// const mapStateToProps = (state) => {
//     return {
//         bgImageUrl: state.configReducer.bgImageUrl
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {}
// }
export default App;
