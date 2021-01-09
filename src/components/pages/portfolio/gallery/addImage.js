import React from 'react'
import axios from 'axios'
import apiPath from '../../../functionality/api'

class AddImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            image: {},
            backgroundColor: 'transparent'
        }
    }

    
    toggle = () => {
        this.setState({open: !this.state.open})
    }

    submitImage = (e) => {
        e.preventDefault()
        this.setState({backgroundColor: 'white'})
        let data = new FormData(e.target)
        let reload = this.props.reload
        
        axios.post( apiPath('/images') , data)
            .then(res => {
                this.setState({backgroundColor: 'green'})
                setTimeout( () => { 
                    this.setState({backgroundColor: 'transparent'}); 
                    reload() 
                }, 2000)
            })

    }

    changeImage = (e) => {
        
        if (e.target.files[0]) {
            this.setState({ image: {
                image_raw: e.target.files[0],
                image_preview_url: URL.createObjectURL(e.target.files[0])
            }})
        }

    }


    render() {

        return <div>

            <div onClick={this.toggle}>Add Image x</div>

            {this.state.open ? <form onSubmit={this.submitImage} style={{backgroundColor: this.state.backgroundColor}}>
                
                <input type="hidden" name="image_project_id" value={this.props.project.project_id} />
                <input type="checkbox" name="thumbnail"  />
                <input type="hidden" name="image_name" value={"Something"} />
                <input type="hidden" name="image_description" value={"Something"} />

                <input onChange={this.changeImage} name="image_raw" type="file" />
                <button type="submit">Add Image</button>

            </form> : ""}

        </div>

    }

}

export default AddImage