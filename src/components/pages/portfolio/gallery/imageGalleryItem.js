import axios from 'axios';
import React from 'react';
import {curr_user} from '../../../functionality/user'
import apiPath from '../../../functionality/api'

class ImageGalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    selectImage = () => {
        this.props.selectImage(this.props.project)
    }

    isSelected = () => {
        return this.props.focusId == this.props.project.project_id
    }

    deleteProject = () => {
        axios.delete( apiPath(`/projects/${this.props.project.project_id}`) ).then( (res) => {
            this.props.loadPage()
        })
    }

    render() {

      const selected = this.isSelected()

      const project = this.props.project
        var style = {
            margin: "1%",
            width: '100%',
            padding:'1%',
            height: "25vh",
            display: 'inline-block',
            cursor: "pointer",
            
            borderRadius: "10px",
            
        }

        return <div className="individualProject target" onClick={this.selectImage} style={ style }>
          <b><u>{ project.project_name }</u></b><br />

        <img src={project.image_url} style={{height:'15vh'}} />

          <div className=""> { project.project_description }</div>

          {curr_user ? <div onClick={this.deleteProject}><span class="fas fa-trash">Project</span></div> : "" }
        </div>
    }

}

export default ImageGalleryItem;
