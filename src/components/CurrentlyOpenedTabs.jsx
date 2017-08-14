import React from 'react';
import {connect} from "react-redux";
/* global chrome */
class CurrentlyOpenedTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            currentlyOpenedTabs: []
        }
    }
    addNewBookmark = (newBookmarkTitle, newBookmarkUrl) => {
        this.props.addFromCurrentlyOpened({
            title: newBookmarkTitle,
            url: newBookmarkUrl
        })
        this.props.closeModal();
    };

    componentDidMount() {
        chrome.tabs.query({}, (openedTabs) => {
            this.setState({
                currentlyOpenedTabs: openedTabs
            })
        })
    }
    render() {
        return (
            <ul className="opened-tabs__list">
                {this.state.currentlyOpenedTabs.map(tab => {
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
