import React from 'react';
import {connect} from 'react-redux';

import ModalFormWrapper from './ModalFormWrapper';
class NewBookmarkModal extends React.Component {



    render(){
        return (
            <div className={this.props.isOpened ? 'is-active modal' : 'modal'}>
                <div className="modal-background" onClick={this.props.closeModal.bind(this)} />

                <ModalFormWrapper  type="new" title="Enter new bookmark"/>
                <button onClick={this.props.closeModal.bind(this)} className="modal-close"/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isOpened: state.modalsReducer.modals.newBookmark.isOpened
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch({
                type: 'CLOSE_NEW_BOOKMARK_MODAL'
            })},
        addNewBookmark: (newBookmark) => {
            dispatch({
                type: 'ADD_NEW_BOOKMARK',
                newBookmark
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewBookmarkModal)