import React from 'react';
import BackgroundConfig from "./BackgroundConfig";
import '../styles/ConfigWrapper.css';
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
        let openConfigButton = <button onClick={() => this.setConfigState(true)} className="button open-config-button"> Open Config</button>;
        let closeConfigButton = <button onClick={() => this.setConfigState(false)} className="button close-config-button"> Close Config </button>;

        return (
            <div className="config-wrapper">
                { this.state.isConfigOpened ? closeConfigButton : openConfigButton}
                { this.state.isConfigOpened ? <BackgroundConfig onCloseConfig={() => this.setConfigState(false)}/> : '' }

            </div>
        )
    }
}

export default ConfigWrapper;  