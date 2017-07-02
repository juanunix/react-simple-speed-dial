import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import CurrentlyOpenedTabs from "../CurrentlyOpenedTabs";
import {MemoryRouter} from 'react-router-dom';
class ModalForm extends React.Component {
    render() {
        return (
            <MemoryRouter>

            <div className="modal-content">
                <div className="card">
                    <div className="card-header">
                        <Link to="/" className="card-header-title">{this.props.title}</Link>
                        { this.props.type === 'new' ? <Link className="card-header-title" to="/currently-opened">Add from currently opened</Link> : ''}
                    </div>
                        <Route exact path="/currently-opened" component={CurrentlyOpenedTabs}/>
                        <Route exact path="/" component={() => <div className="card-content">
                            <div className="field">
                                <label htmlFor="bookmark-title" className="label">
                                    Title
                                </label>
                                <p className="control">
                                    <input type="text" className="input"/>
                                </p>
                            </div>
                            <div className="field">
                                <label htmlFor="bookmark-url" className="label">
                                    URL
                                </label>
                                <p className="control">
                                    <input type="url" className="input"/>
                                </p>

                            </div>
                            <div className="field">
                                <button className="button" onClick={this.props.saveBookmark} > Save </button>

                            </div>
                        </div>}/>

                </div>

            </div>
            </MemoryRouter>

        )
    }
}
;

export default ModalForm;  