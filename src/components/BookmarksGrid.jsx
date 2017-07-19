import React from 'react';
import {connect} from 'react-redux';
import Bookmark from './Bookmark.jsx';
class BookmarksGrid extends React.Component {
    render() {
        return (
            <div className="bookmark__grid">
                {this.props.bookmarks.map((singleBookmark, key) => {
                    return <Bookmark key={key} title={singleBookmark.title} id={singleBookmark.id} url={singleBookmark.url}/>
                })}
                <button onClick={this.props.openNewBookmarkModal.bind(this)} className="button is-info">New Bookmark</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarksReducer.bookmarks
    }
};

const mapDispatchToProps = (dispatch) => {
        return {
            openNewBookmarkModal: () => dispatch({
                type: 'OPEN_NEW_BOOKMARK_MODAL'
            })
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksGrid);