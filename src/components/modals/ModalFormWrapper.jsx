/* global chrome */
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
import ColorFinder from '../helpers/ColorFinder';
class ModalFormWrapper extends React.Component {


    delegateBookmarkAction = (newBookmark) => {
        console.log('new bookmark action type ', newBookmark.actionType);
        console.log(`has id ${newBookmark.id}`);
        console.log(newBookmark);
        if (newBookmark.title !== '' && newBookmark.url !== '') {
            switch(newBookmark.actionType) {
                case 'new':
                    this.prepareAddingNewBookmark(newBookmark);
                    break;
                case 'edit':
                    this.prepareUpdatingNewBookmark(newBookmark);
                    break;
                default: 
                    this.prepareAddingNewBookmark(newBookmark);
                    break;
            }
            this.props.closeModal();

        }


    }
    prepareAddingNewBookmark(newBookmark) {
        const extensionFolder = this.props.extensionFolder;
        const newBookmarkColor = ColorFinder.getColorFromUrl(newBookmark.url);
        const urlWithColor = ColorFinder.getEncodedUrl(newBookmark.url);
        const bookmarkToCreate = {
            title: newBookmark.title,
            url: urlWithColor,
            parentId: extensionFolder.id
        };

        chrome.bookmarks.create(bookmarkToCreate, (result) => {
            
            if (result === 'error')
                alert('cannot create bookamrk!');

            this.props.addNewBookmark({
                ...bookmarkToCreate,
                color: newBookmarkColor
            })

        });
        
    }

    prepareUpdatingNewBookmark(updatedBookmark) {
        chrome.bookmarks.update(updatedBookmark.id, {
            title: updatedBookmark.title,
            url: updatedBookmark.url
        }, (result) => {
            if (result === 'error') throw new Error('cant update bookmark')
            this.props.updateBookmark({
                title: updatedBookmark.title,
                url: updatedBookmark.url,
                id: updatedBookmark.id
            })
        });
       
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
                            <CurrentlyOpenedTabs {...props} addFromCurrentlyOpened={this.delegateBookmarkAction}/>
                        )}/>
                        <Route key="form" exact path="/" render={(props) => (
                            <ModalInnerForm {...props} type={this.props.type} onAddNewBookmark={this.delegateBookmarkAction}/>
                            )}/>
                  </div>

            </div>
            </MemoryRouter>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        extensionFolder: state.chromeReducer.extensionFolder
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
