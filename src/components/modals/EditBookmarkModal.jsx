import React from 'react';
import {connect} from 'react-redux';
import ModalFormWrapper from './ModalFormWrapper';
class EditBookmarkModal extends React.Component {
    render() {
        return (
            <div className={this.props.isOpened ? 'is-active modal' : 'modal'}>
                <div className="modal-background" onClick={this.props.closeModal.bind(this)} />
                <ModalFormWrapper type="edit" title="Edit bookmark"/>
                <button onClick={this.props.closeModal.bind(this)} className="modal-close"/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isOpened: state.modalsReducer.modals.editBookmark.isOpened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            return dispatch({
                type: 'CLOSE_EDIT_BOOKMARK_MODAL'
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBookmarkModal);