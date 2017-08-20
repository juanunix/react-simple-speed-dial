import React from 'react';
import {connect} from "react-redux";
import './styles/CurrentlyOpenedTabs.css';
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
            let openedTabsWithoutChromePrefix = openedTabs.filter((tab) => {
                return tab.url.indexOf('chrome://') < 0
            });
            this.setState({
                currentlyOpenedTabs: openedTabsWithoutChromePrefix
            })
        })
    }
    render() {
        return (
            <ul className="opened-tabs__list">
                {this.state.currentlyOpenedTabs.map(tab => {
                    return ( <li onClick={() => this.addNewBookmark(tab.title, tab.url)} className="opened-tabs__element">
                        <span className="opened-tabs__title"> { tab.title } </span>
                        <span className="opened-tabs__url"> { tab.url }</span>
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
