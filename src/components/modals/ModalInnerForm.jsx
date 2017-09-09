import React from 'react';
import {connect} from "react-redux";
import '../styles/Buttons.css';
class ModalInnerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.editedBookmarkUrl,
            url: props.editedBookmarkTitle,
            id: props.editedBookmarkId
        }
    }

    handleChange = (event) => {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    addUrlPrefix(urlToAddPrefixTo) {
        if (urlToAddPrefixTo.indexOf('http://') > -1 || urlToAddPrefixTo.indexOf('https://') > -1) {
            return urlToAddPrefixTo
        } else return 'https://' + urlToAddPrefixTo
    }
    addNewBookmark = () => {
        
        this.props.onAddNewBookmark({
            title: this.state.title,
            url: this.addUrlPrefix(this.state.url),
            actionType: this.props.type,
            id: this.state.id
        })
    }
    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.addNewBookmark();
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            title: props.editedBookmarkTitle,
            url: props.editedBookmarkUrl,
            id: props.editedBookmarkId
        })
    }
    closeBookmarkModal = (event) => {
        this.props.closeBookmark();
    }
    render() {
        return (
            <div className="card-content">
                <div className="field">
                    <label htmlFor="bookmark-title" className="label">
                        Title
                    </label>
                    <p className="control">
                        <input key="title" onChange={this.handleChange} value={this.state.title}
                               name="title"
                               type="text"
                               className="input"/>
                    </p>
                </div>
                <div className="field">
                    <label htmlFor="bookmark-url" className="label">
                        URL
                    </label>
                    <p className="control">
                        <input key="url" onChange={this.handleChange} value={this.state.url}
                               name="url"
                               type="url"
                               className="input"
                                onKeyDown={this.handleKeyPress}/>
                    </p>

                </div>
                <div className="buttons-container">
                    <button className="button is-success" onClick={this.addNewBookmark}>Save</button>
                    <button className="button is-danger" onClick={this.closeBookmarkModal}>Cancel</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editedBookmarkTitle: state.bookmarksReducer.editedBookmark.title,
        editedBookmarkUrl: state.bookmarksReducer.editedBookmark.url,
        editedBookmarkId: state.bookmarksReducer.editedBookmark.id
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        closeBookmarkModal: () => {
            dispatch({
                type: 'CLOSE_ALL_BOOKMARK_MODALS'
            });
    }
}};



export default connect(mapStateToProps, mapDispatchToProps)(ModalInnerForm);