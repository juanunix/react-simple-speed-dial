import React from 'react';
import {connect} from 'react-redux';
class BackgroundConfig extends React.Component {

    constructor() {
        super();
        this.state = {
            bgImageUrl: ''
        }
    }

    updateStateFromInput = (event) => {
        this.setState({
            bgImageUrl: event.target.value
        })
    };
    resetBackgroundImage = () => {
      this.props.setBackgroundImage('');
      this.setState({
          bgImageUrl: ''
      })
    };
    setBackgroundImage = () => {
        this.props.setBackgroundImage(this.state.bgImageUrl);
        this.setState({
            bgImageUrl: ''
        })
    };
    render() {
        return (
            <div className="config__option background-config">
                <div className="field">
                    <label htmlFor="bg-image__input" className="label">Background image</label>
                    <p className="control">
                        <input value={this.state.bgImageUrl} onChange={this.updateStateFromInput} id="bg-image__input" type="url" className="input bg-image__input" placeholder="Enter url"/>
                    </p>
                </div>
                <button onClick={this.setBackgroundImage} className="button is-success">Save</button>
                <button onClick={this.resetBackgroundImage} className="button is-danger">Reset</button>
                <p>Preview: </p>
                    <div style={{
                        width: 350,
                        height: 350,
                        backgroundSize: 'cover',
                        backgroundImage: `url(${this.state.bgImageUrl})`
                    }} className="bg-image__preview">

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBackgroundImage: (bgImageUrl) => {
            dispatch({
                type: 'SET_BACKGROUND_URL',
                bgImageUrl
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BackgroundConfig);