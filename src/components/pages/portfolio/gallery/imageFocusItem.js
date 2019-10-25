import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import FocusItemImage from './focusItemImage'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

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
        return Object.keys(project).length > 1 ?

        <div>
            <CSSTransition key={project.project_id} in={true} enter={true} exit={true} appear={true} timeout={1000} classNames="fadePortfolio" unmountOnExit><div>

            <h2 style={{marginTop:'-20px'}} className="pageSeparatorHeader" >{project.project_name}</h2><br />


            <Row>
              <Col lg="6" xs="12">

                <h5>{project.project_description}</h5>

                {
                  project.github_link_2 ? <div>
                    <a className="plain-link" href={project.github_link} target="_blank">Github (Frontend)</a><br/>
                    <a className="plain-link" href={project.github_link_2} target="_blank">Github (Backend)</a><br/>
                  </div>
                  :<div>
                    {
                        project.github_link ?
                        <a className="plain-link" href={project.github_link} target="_blank">Github</a>
                        : ""
                    }
                  </div>
                }
                {
                  project.live_link ?
                    <a className="plain-link" href={project.live_link} target="_blank">View Live</a>: ""
                }

                <div style={{padding:'15px'}}>
                                <h3>Technologies Used</h3>
                {
                  project.technologies.map(tech => (
                    <div className="technology-button" style={{backgroundColor: tech.technology_hex_color}}>
                      <Link to={`/resume?tech=${tech.technology_id}`}>{tech.technology_name}</Link>
                    </div>
                  ))
                }
                </div>
              </Col>


                <Col lg="6" xs="12">
                  <img width='100%' src={project.thumbnail ? project.thumbnail.image_url : ""} /><br />
                </Col>
                <Col xs='12' >
                  <br />
                  <div className="pageSeparatorHeader">
                  <h4>Images</h4>
                  {
                    [project.thumbnail, ...project.images].map(img => <FocusItemImage image={img} />
                    )
                  }<br />
                  Click to enlarge<br />
                  </div>
                  <br />
              </Col>


            </Row>

            {project.project_details ?
              <div style={{padding:'20px'}}>
                <h3>More about this project & what it entailed</h3>
                {project.project_details}
              </div>
            : "" }

            {project.project_development ?
              <div style={{padding:'20px'}}>
                <h3>Hurdles, challenges & enjoyment in development</h3>
                {project.project_development}
              </div>
            : "" }

            {project.project_reflection ?
              <div style={{padding:'20px'}}>
                <h3>Looking back upon completion, how did I feel about the process?</h3>
                {project.project_reflection}
              </div>
            : "" }

            {project.project_history ?
              <div style={{padding:'20px'}}>
                <h3>Is there anywhere else I'd like to take this project?</h3>
                {project.project_history}
              </div>
            : "" }

        </div></CSSTransition></div>
        : ""
    }

}

export default ImageFocusItem;
