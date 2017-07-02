import React from 'react';

class DeleteBookmarkModal extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpened: false
        }
    }
    closeModal() {
        this.setState({
            isOpened: false
        })
    }
    render() {
        return (
            <div className={this.state.isOpened ? 'is-active modal' : 'modal'}>
                <div className="modal-background" onClick={this.closeModal.bind(this)} />
                <div className="modal-content">
                    <div className="notification is-warning">
                        <button onClick={this.closeModal.bind(this)} className="delete"/>
                        <p> Are you sure you want to delete this bookmark?</p>
                        <button className="button">Yes</button>
                        <button onClick={this.closeModal.bind(this)} className="button">No</button>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default DeleteBookmarkModal;  