import React from 'react';
import {connect} from "react-redux";
class DebugComponent extends React.Component {
    render() {
        return (
            <div className="debug-component">
                <h4 className="debug-component">Debugging</h4>
                <p>{this.props.testBookmark.title}</p>
                <p>{this.props.testBookmark.url}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        testBookmark: state.debugReducer.testBookmark
    }
}
const mapDispatchToProps = (dispatch) => {
    return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(DebugComponent);