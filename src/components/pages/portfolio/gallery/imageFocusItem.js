import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import FocusItemImage from './focusItemImage'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Field from '../../helpers/field'
import SpecialField from '../../helpers/specialField'
import AddTechnology from './addTechnology'
import AddImage from './addImage'

import apiPath from '../../../functionality/api'

class ImageFocusItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      project: this.props.project,

    }
  }

  UNSAFE_componentWillReceiveProps = (props) => {
    this.setState({ project: props.project})
  }

  changeValue = (name, value) => {
    let project = { ...this.state.project }
    project[name] = value
    this.setState({ project: project })
  }

  submitForm = () => {
    let project = {}
    Object.entries(this.state.project).map((pField) => ['images', 'technologies', 'thumbnail'].includes(pField[0]) ? null : project[pField[0]] = pField[1])

    axios.put(apiPath(`/projects/${this.state.project.project_id}`), project)
      .then((res) => {
        axios.get(apiPath(`/projects/${this.state.project.project_id}`))
          .then((res) => { console.log(res); this.setState({ project: res.data }) })
      })
  }

  
  deleteProjectConnection = (e) => {
    let project_tech_id = e.target.getAttribute('data-project-tech-id')

    if (window.confirm('Are you sure you want to delete this connection?')) {
      axios.delete(apiPath(`/projects_to_technologies/${project_tech_id}`))
        .then(res => {
          
        })
    }
  }

  projectField = (name) => {
    return <Field key={this.state.project.project_id + name} name={name} item={this.state.project} changeValue={this.changeValue} submitForm={this.submitForm} />
  }

  specialField = (name, callback) => {
    return <SpecialField name={name} item={this.state.project} cb={callback} changeValue={this.changeValue} submitForm={this.submitForm} />
  }


  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    const project = this.props.project
    return Object.keys(project).length > 1 ?

      <div>
        <CSSTransition key={project.project_id} in={true} enter={true} exit={true} appear={true} timeout={1000} classNames="fadePortfolio" unmountOnExit><div>

          <h2 style={{ marginTop: '-20px' }} className="pageSeparatorHeader" >{this.projectField('project_name')}</h2><br />


          <Row>
            <Col lg="6" xs="12">

              <h5>{this.projectField('project_description')}</h5>

              {
                project.github_link_2 ? <div>

                  {this.specialField('github_link', (value) => { return <a className="plain-link" href={value} target="_blank">Github (Frontend)</a> })}
                  <br />
                  {this.specialField('github_link_2', (value) => { return <a className="plain-link" href={value} target="_blank">Github (Backend)</a> })}

                </div>
                  : <div>
                    {
                      project.github_link ?

                        <div>
                          {this.specialField('github_link', (value) => { return <a className="plain-link" href={value} target="_blank">Github</a> })}
                          <br />
                          {this.specialField('github_link_2', (value) => { return "" })}
                        </div>
                        : ""
                    }
                  </div>
              }
              {
                project.live_link ?
                  <a className="plain-link" href={project.live_link} target="_blank">View Live</a> : ""
              }

              <div style={{ padding: '15px' }}>
                <h3>Technologies Used</h3>
                {
                  project.technologies.map(tech => (
                    <span>
                    <div className="technology-button" style={{ backgroundColor: tech.technology_hex_color }}>
                      <Link to={`/resume?tech=${tech.technology_id}`}>{tech.technology_name}</Link>

                    </div>
                    
                    <span data-project-tech-id={tech.project_to_technology_id} onClick={this.deleteProjectConnection}>-x</span>
                    </span>
                  ))

                }
                  
                <AddTechnology project={project} />


                
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
                  [project.thumbnail, ...project.images].map(img => <FocusItemImage image={img} />)
                }<br />

                <AddImage project={project} />
                  Click to enlarge<br />
              </div>
              <br />
            </Col>


          </Row>

          {project.project_details ?
            <div style={{ padding: '20px' }}>
              <h3>More about this project & what it entailed</h3>
              {this.projectField('project_details')}
            </div>
            : this.projectField('project_details')}

          {project.project_development ?
            <div style={{ padding: '20px' }}>
              <h3>Hurdles, challenges & enjoyment in development</h3>
              {this.projectField('project_development')}
            </div>
            : this.projectField('project_development')}

          {project.project_reflection ?
            <div style={{ padding: '20px' }}>
              <h3>Looking back upon completion, how did I feel about the process?</h3>
              {this.projectField('project_reflection')}
            </div>
            : this.projectField('project_reflection')}

          {project.project_history ?
            <div style={{ padding: '20px' }}>
              <h3>Is there anywhere else I'd like to take this project?</h3>
              {this.projectField('project_history')}
            </div>
            : this.projectField('project_history')}

        </div></CSSTransition></div>
      : ""
  }

}

export default ImageFocusItem;
