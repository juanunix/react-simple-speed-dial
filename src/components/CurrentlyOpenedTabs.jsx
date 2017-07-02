import React from 'react';
import {connect} from "react-redux";

class CurrentlyOpenedTabs extends React.Component {
    render() {
        return (
            <ul className="opened-tabs__list">
                {this.props.currentlyOpenedTabs.map(tab => {
                    return ( <li className="opened-tabs__element"><a href={tab.url}> {tab.title} </a> </li> )
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyOpenedTabs);
