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
            height: "22vh",
            display: 'inline-block',
            cursor: "pointer",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            borderRadius: "10px",
            justifyContent: "center"
            
        }

        return <div className="individualProject target" onClick={this.selectImage} style={ style }>
          <h5 style={{width: '100%'}}>{ project.project_name }</h5>

            <img src={project.image_url} style={{height:'50%'}} />

          <div style={{width: '100%', height: '25%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: "ellipsis"}}> { project.project_description }</div>

          {curr_user ? <div onClick={this.deleteProject}><span class="fas fa-trash">Project</span></div> : "" }
        </div>
    }

}

export default ImageGalleryItem;
