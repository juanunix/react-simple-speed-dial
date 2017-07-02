import React from 'react';
import {connect} from 'react-redux';
class NewBookmarkModal extends React.Component {



    render(){
        return (
            <div className={this.props.isOpened ? 'is-active modal' : 'modal'}>
                <div className="modal-background" onClick={this.props.closeModal.bind(this)} />

                <div className="modal-content">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-header-title">New bookmark</h2>
                        </div>
                        <div className="card-content">
                            <div className="field">
                                <label htmlFor="bookmark-title" className="label">
                                    Title
                                </label>
                                <p className="control">
                                    <input type="text" className="input"/>
                                </p>
                            </div>
                            <div className="field">
                                <label htmlFor="bookmark-url" className="label">
                                    URL
                                </label>
                                <p className="control">
                                    <input type="url" className="input"/>
                                </p>

                            </div>
                            <div className="field">
                                <button className="button" onClick={this.props.saveBookmark} > Save </button>

                            </div>
                        </div>
                    </div>


                </div>
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