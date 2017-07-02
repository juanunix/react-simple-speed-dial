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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmark)