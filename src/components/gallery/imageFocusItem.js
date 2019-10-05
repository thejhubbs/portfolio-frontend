import React from 'react';
import {Link} from 'react-router-dom'

class ImageFocusItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
      const project = this.props.project
        return Object.keys(project).length > 1 ? <div>
            <h1>{project.project_name}</h1>

            <img width='400px' src={project.thumbnail.image_url} /><br />
            {/*
              Do one main with the thumbnail auto selected with a few others small to the right
            */}

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
                <div style={{backgroundColor: tech.technology_hex_color,display:"inline-block",padding:'5px'}} >
                  <Link to={`/about?tech=${tech.technology_id}`}>{tech.technology_name}</Link>
                </div>
              ))
            }

            <h3>More about this project & what it entailed</h3>
            {project.project_details}

            <h3>Hurdles, challenges & enjoyment in development</h3>
            {project.project_development}

            <h3>Looking back upon completion, how did I feel about the process?</h3>
            {project.project_reflection}

            <h3>Is there anywhere else I'd like to take this project?</h3>
            {project.project_history}

        </div>
        : ""
    }

}

export default ImageFocusItem;
