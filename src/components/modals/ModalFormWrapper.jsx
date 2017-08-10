import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import CurrentlyOpenedTabs from "../CurrentlyOpenedTabs";
import {MemoryRouter} from 'react-router-dom';
import ModalInnerForm from './ModalInnerForm';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {addNewBookmark} from '../../store/actions/bookmarksActions';
import {closeNewBookmarkModal} from '../../store/actions/modalsActions';
class ModalFormWrapper extends React.Component {


    addNewBookmark = (newBookmark) => {
        console.log('new bookmark action type ', newBookmark.actionType);
        if (newBookmark.title !== '' && newBookmark.url !== '') {

            switch(newBookmark.actionType) {
                case 'new':
                    this.props.addNewBookmark({
                        title: newBookmark.title,
                        url: newBookmark.url
                    });
                    break;
                case 'edit':
                    this.props.updateBookmark({
                        title: newBookmark.title,
                        url: newBookmark.url
                    });
                    break;
            }

            this.props.closeModal();

        }


    }

    render() {
        return (

            <MemoryRouter>

            <div className="modal-content">
                <div className="card">
                    <div className="card-header">
                        <Link to="/" className="card-header-title">{this.props.title}</Link>
                        { this.props.type === 'new' ? <Link className="card-header-title is-info" style={{color: '#4574aa'}} to="/currently-opened">Add from currently opened</Link> : ''}
                    </div>
                        <Route exact path="/currently-opened" render={(props) => (
                            <CurrentlyOpenedTabs {...props} addFromCurrentlyOpened={this.addNewBookmark}/>
                        )}/>
                        <Route key="form" exact path="/" render={(props) => (
                            <ModalInnerForm {...props} type={this.props.type} onAddNewBookmark={this.addNewBookmark}/>
                            )}/>
                  </div>

            </div>
            </MemoryRouter>

        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
};
const mapDispatchToProps = (dispatch) => {

    return {
        closeModal: () => {
            dispatch({
                type: 'CLOSE_NEW_BOOKMARK_MODAL'
            });
            dispatch({
                type: 'CLOSE_EDIT_BOOKMARK_MODAL'
            })
            },

        addNewBookmark: (newBookmark) => {
            dispatch({
                type: 'ADD_NEW_BOOKMARK',
                newBookmark
            })
        },

        updateBookmark: (updatedBookmark) => {
            dispatch({
                type: 'UPDATE_BOOKMARK',
                updatedBookmark
            })
        }
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(ModalFormWrapper)
