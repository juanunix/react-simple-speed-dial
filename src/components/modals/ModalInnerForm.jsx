import React from 'react';

class ModalInnerForm extends React.Component {
    render() {
        return (
            <div className="card-content">
                <div className="field">
                    <label htmlFor="bookmark-title" className="label">
                        Title
                    </label>
                    <p className="control">
                        <input key="title" onChange={this.handleChange} value={this.state.title} name="title" type="text" className="input"/>
                    </p>
                </div>
                <div className="field">
                    <label htmlFor="bookmark-url" className="label">
                        URL
                    </label>
                    <p className="control">
                        <input key="url" onChange={this.handleChange} value={this.state.url} name="url" type="url" className="input"/>
                    </p>

                </div>

            </div>
        )
    }
}


export default ModalInnerForm;  