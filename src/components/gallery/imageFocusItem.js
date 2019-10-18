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
                    project.images.map(img =>
                      <img width='100px' src={img.image_url} />
                    )
                  }

                  <br />
              </div>
            </div>

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
