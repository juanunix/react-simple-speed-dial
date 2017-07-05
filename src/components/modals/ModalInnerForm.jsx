import React from 'react';

class ModalInnerForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            url: ''
        }
    }
    handleChange = (event) => {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }
    addNewBookmark = () => {
        console.log(`state in modalinnferform `);
        console.log(this.state);
        this.props.onAddNewBookmark({
            title: this.state.title,
            url: this.state.url
        })
    }
    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.addNewBookmark();
        }
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
                <button className="button" onClick={this.addNewBookmark} > Save </button>

            </div>
        )
    }
}


export default ModalInnerForm;  