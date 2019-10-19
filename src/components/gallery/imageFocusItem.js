import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FocusItemImage from './focusItemImage'


class ImageFocusItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        }
    }


    toggle = () => this.setState({modal: !this.state.modal});

    render() {
      const project = this.props.project
        return Object.keys(project).length > 1 ? <div>

            <h1>{project.project_name}</h1>


            <div style={{display:"flex"}}>
              <div style={{width:"50%"}}>

                {project.project_description}

                {
                  project.github_link_2 ? <div>
                    <a href={project.github_link} target="_blank">Github (Frontend)</a><br/>
                    <a href={project.github_link_2} target="_blank">Github (Backend)</a><br/>
                  </div>
                  :<div>
                    {
                        project.github_link ?
                        <a href={project.github_link} target="_blank">Github</a>
                        : ""
                    }
                  </div>
                }
                {
                  project.live_link ?
                    <a href={project.live_link} target="_blank">View Live</a>: ""
                }

                <h3>Technologies Used</h3>
                {
                  project.technologies.map(tech => (
                    <div className="technology-button" style={{backgroundColor: tech.technology_hex_color}}>
                      <Link to={`/about?tech=${tech.technology_id}`}>{tech.technology_name}</Link>
                    </div>
                  ))
                }
              </div>


              <div style={{width:"50%"}}>
                  <img width='400px' src={project.thumbnail ? project.thumbnail.image_url : ""} /><br />
                  {
                    [project.thumbnail, ...project.images].map(img => <FocusItemImage image={img} />
                    )
                  }

                  <br />
              </div>


            </div>

            {project.project_details ?
              <div>
                <h3>More about this project & what it entailed</h3>
                {project.project_details}
              </div>
            : "" }

            {project.project_development ?
              <div>
                <h3>Hurdles, challenges & enjoyment in development</h3>
                {project.project_development}
              </div>
            : "" }

            {project.project_reflection ?
              <div>
                <h3>Looking back upon completion, how did I feel about the process?</h3>
                {project.project_reflection}
              </div>
            : "" }

            {project.project_history ?
              <div>
                <h3>Is there anywhere else I'd like to take this project?</h3>
                {project.project_history}
              </div>
            : "" }

        </div>
        : ""
    }

}

export default ImageFocusItem;
