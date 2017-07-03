import React from 'react';
import {connect} from 'react-redux';
class Bookmark extends React.Component {
    render() {
        return (
            <div>
                <a className="bookmark" href={this.props.url}>
                    <p className="bookmark__name">{this.props.name}</p>
                </a>
                <button onClick={this.props.openEditModal.bind(this)} className="button">Edit</button>
                <button onClick={this.props.deleteBookmark.bind(this, this.props.url)} className="button is-danger">Delete </button>
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        openEditModal: () => {
            dispatch({
                type: 'OPEN_EDIT_BOOKMARK_MODAL'
            })
        },
        deleteBookmark: (urlToDelete) => {
            dispatch({
                type: 'DELETE_BOOKMARK',
                urlToDelete
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark)