import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import CurrentlyOpenedTabs from "../CurrentlyOpenedTabs";
import {MemoryRouter} from 'react-router-dom';
import ModalInnerForm from './ModalInnerForm';
class ModalFormWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            url: '',
            title: '',
        }
    }
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    addNewBookmark(newBookmark) {
        if (this.state.title !== '' && this.state.url !== '')
            this.props.addNewBookmark(newBookmark)
    }
    render() {
        let self = this;
        return (

            <MemoryRouter>

            <div className="modal-content">
                <div className="card">
                    <div className="card-header">
                        <Link to="/" className="card-header-title">{this.props.title}</Link>
                        { this.props.type === 'new' ? <Link className="card-header-title is-info" to="/currently-opened">Add from currently opened</Link> : ''}
                    </div>
                        <Route exact path="/currently-opened" component={CurrentlyOpenedTabs}/>
                        <Route key="form" exact path="/" component={ModalInnerForm}/>
                    <div className="field">
                        <button className="button" onClick={this.addNewBookmark.bind(this)} > Save </button>

                    </div>
                </div>

            </div>
            </MemoryRouter>

        )
    }
}
;

export default ModalFormWrapper;