import React from 'react';
import {connect} from "react-redux";

class CurrentlyOpenedTabs extends React.Component {
    addNewBookmark = (newBookmarkTitle, newBookmarkUrl) => {
        this.props.addFromCurrentlyOpened({
            title: newBookmarkTitle,
            url: newBookmarkUrl
        })
        this.props.closeModal();
    };
    render() {
        return (
            <ul className="opened-tabs__list">
                {this.props.currentlyOpenedTabs.map(tab => {
                    return ( <li className="opened-tabs__element">
                        <p onClick={() => this.addNewBookmark(tab.title, tab.url)}> {tab.title} </p>
                    </li> )
                    }
                )}

            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentlyOpenedTabs: state.bookmarksReducer.currentlyOpenedTabs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch({
                type: 'CLOSE_NEW_BOOKMARK_MODAL'
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyOpenedTabs);
