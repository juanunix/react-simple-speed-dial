/* global chrome */
import React from 'react';
import {connect} from 'react-redux';
class Bookmark extends React.Component {

    deleteBookmark = () => {
            chrome.bookmarks.remove(this.props.id, () => {
                this.props.deleteBookmark(this.props.id);
            })
       
    }
    render() {
        return (
            <div>
                <a className="bookmark" href={this.props.url}>
                    <p className="bookmark__name">{this.props.title}</p>
                </a>
                <button onClick={this.props.openEditModal.bind(this, this.props.title, this.props.url, this.props.id)} className="button">Edit</button>
                <button onClick={this.deleteBookmark} className="button is-danger">Delete </button>
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openEditModal: (editedBookmarkTitle, editedBookmarkUrl, editedBookmarkId) => {
            dispatch({
                type: 'OPEN_EDIT_BOOKMARK_MODAL',
            });
            dispatch({
                type: 'SET_EDITED_BOOKMARK',
                title: editedBookmarkTitle,
                url: editedBookmarkUrl,
                id: editedBookmarkId
            })
        },
        deleteBookmark: (idToDelete) => {
            dispatch({
                type: 'DELETE_BOOKMARK',
                idToDelete
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark)