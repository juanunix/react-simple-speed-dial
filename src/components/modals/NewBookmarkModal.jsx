import React from 'react';
import {connect} from 'react-redux';
const NewBookmarkModal = (props) => {
    return (
        <div className="modal new-bookmark-modal">
            <input type="text" placeholder="URL"/>
            <input type="text" placeholder="title"/>
            <button className="button" onClick={props.saveBookmark} > Save </button>
        </div>
    )
}

const mapStateToProps = (state);

const mapDipatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(NewBookmarkModal)