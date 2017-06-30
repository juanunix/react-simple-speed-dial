import React from 'react';
import {connect} from 'react-redux';
import Bookmark from './Bookmark.jsx';
class BookmarksGrid extends React.Component {
    render() {
        return (
            <div className="bookmark__grid">
                {this.props.bookmarks.map((singleBookmark, key) => {
                    return <Bookmark key={key} id={singleBookmark.id} url={singleBookmark.url}/>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksGrid);