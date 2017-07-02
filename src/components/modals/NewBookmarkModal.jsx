import React from 'react';
import {connect} from 'react-redux';

import ModalForm from './ModalForm';
class NewBookmarkModal extends React.Component {



    render(){
        return (
            <div className={this.props.isOpened ? 'is-active modal' : 'modal'}>
                <div className="modal-background" onClick={this.props.closeModal.bind(this)} />

                <ModalForm type="new" title="Enter new bookmark"/>
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
            })}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewBookmarkModal)