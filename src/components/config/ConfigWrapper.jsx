import React from 'react';
import BackgroundConfig from "./BackgroundConfig";

class ConfigWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            isConfigOpened: false
        }
    }

    setConfigState = (newConfigState) => {
      this.setState({
          isConfigOpened: newConfigState
      })
    };
    render() {
        return (
            <div className="config-wrapper">
                <button onClick={() => this.setConfigState(true)} className="button open-config-button"> Open Config</button>
                { this.state.isConfigOpened ? <BackgroundConfig/> : '' }
                <button onClick={() => this.setConfigState(false)} className="button close-config-button"> Close Config </button>
            </div>
        )
    }
}

export default ConfigWrapper;  