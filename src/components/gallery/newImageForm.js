import React from 'react';

class NewImageForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: {
                name: "",
                description: "",
                url: ""
            }
        }
    }

    changeHandler = (e) => {
        this.setState({
          image: {
            ...this.state.image,
            [e.target.name]: e.target.value
          }
        });
    }

    formSubmit = (e) => {   
        e.preventDefault();
        this.props.updateGalleryNew(this.state.image);
        this.setState({image: {
            name: "",
            description: "",
            url: ""
        }});
    }   

    render(){
        const { name, description, url } = this.state.image

        return <form onSubmit={this.formSubmit}>
            <input name="name" value={name} type="text" onChange={this.changeHandler} />
            <input name="description" value={description} type="text" onChange={this.changeHandler} />
            <input name="url"  value={url} type="text" onChange={this.changeHandler} />
            <button type="submit">Create New Image Item</button>
        </form>
    }

}

export default NewImageForm;