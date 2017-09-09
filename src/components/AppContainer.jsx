import React from 'react';
import { connect} from 'react-redux';
import BookmarksGrid from './BookmarksGrid.jsx';
import Modals from './Modals.jsx';
import ConfigWrapper from './config/ConfigWrapper.jsx';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app-container container-fluid"
            style={{backgroundImage: `url(${this.props.bgImageUrl})`}}>
                <h1 style={{paddingTop: 25}} className="title">Simple Speed Dial</h1>
                <BookmarksGrid/>
                <Modals/>
                <ConfigWrapper/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bgImageUrl: state.configReducer.bgImageUrl
    }
}

export default connect(mapStateToProps)(AppContainer);