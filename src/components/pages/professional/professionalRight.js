import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import AboutCode from './professionalCode'
import TechItem from './techItem'
import axios from 'axios'
import qs from 'qs'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Field from '../helpers/field'

import apiPath from '../../functionality/api'
import {curr_user} from '../../functionality/user'



class ProfessionalRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: [],
      selectedTech: {}
    }

  }

  componentDidMount = () => {
    this.reload()
  }

  reload = () => {
    axios.get(apiPath('/technologies'))
      .then(res => {
        this.setState({ technologies: res.data })
        const query = qs.parse(this.props.location.search.substr(1))
        if (query && query.tedch) {
          this.selectTech({ technology_id: query.tech })
        } else {
          this.selectTech({ technology_id: res.data[0].technology_id })
        }
      })
  }

  selectTech = (tech) => {
    axios.get(apiPath(`/technologies/${tech.technology_id}`))
      .then(res => this.setState({ selectedTech: res.data }))
  }

  deleteProjectConnection = (e) => {
    let project_tech_id = e.target.getAttribute('data-project-tech-id')

    if (window.confirm('Are you sure you want to delete this connection?')) {
      axios.delete(apiPath(`/projects_to_technologies/${project_tech_id}`))
        .then(res => {
          axios.get(apiPath(`/technologies/${this.state.selectedTech.technology_id}`))
            .then((res) => {
              this.setState({ selectedTech: res.data })
            })
        })
    }
  }

  deleteTechnology = (e) => {
    let tech_id = this.state.selectedTech.technology_id

    if (window.confirm('Are you sure you want to delete this technology?')) {
      axios.delete(apiPath(`/technologies/${tech_id}`))
        .then(res => {
          this.reload()
        })
    }
  }

  addTechnology = () => {
    let data = {technology_name: "something", technology_experience: "something", technology_hex_color: "#666"}
    
    axios.post(apiPath('/technologies'), data)
        .then(res => {
            this.reload()
        })
  }

  changeValue = (name, value) => {
    let tech = { ...this.state.selectedTech }
    tech[name] = value
    this.setState({ selectedTech: tech })
  }

  submitForm = () => {
    let tech = {}
    Object.entries(this.state.selectedTech).map((pField) => ['children', 'parent', 'projects'].includes(pField[0]) ? null : tech[pField[0]] = pField[1])

    axios.put(apiPath(`/technologies/${tech.technology_id}`), tech)
      .then((res) => {

       this.reload()
      })
  }

  projectField = (name) => {
    return <Field key={this.state.selectedTech.technology_id + name} name={name} item={this.state.selectedTech} changeValue={this.changeValue} submitForm={this.submitForm} />
  }


  render() {
    var data = []



    const selectedTech = this.state.selectedTech
    //const pdfLink = "https://docs.google.com/document/export?format=pdf&id=1-ZkXoXFkzdoZlHC8MPRU3XMDI91ZN8LuJ_fTdy6Eezc&token=AC4w5Vjdei8_nlqjy3Mi25hRqC0M5hsx4Q%3A1571880123637&ouid=116751004868990183303&includes_info_params=true"
    //const docLink = "https://docs.google.com/document/d/1-ZkXoXFkzdoZlHC8MPRU3XMDI91ZN8LuJ_fTdy6Eezc/edit#heading=h.wfkgwt8t5efm"

    return <div>

      {/*<div id="resumeLinks">
                  <a href={docLink} target="_blank" className="page-button pb-primary" style={{marginTop:'10px'}}>View Resume in Traditional Format</a>
                  <a href={pdfLink} target="_blank"  className="page-button pb-primary" style={{marginTop:'10px'}}>Download as Printable PDF</a>
    </div>*/}
      <h2 style={{ marginTop: '-20px' }} className="pageSeparatorHeader" >Technologies/Languages</h2>
      <Row>

        <Col lg="6" xs="12">
          <br />
          <p>Please select one for experience & samples of work</p>
          
          {curr_user ? 
        <span onClick={this.addTechnology}>Add Technology</span> : "" }

          {
            this.state.technologies.map(tech =>

              <span className="technology-button" style={
                {
                  backgroundColor: tech.technology_hex_color
                }
              }>
                <TechItem tech={tech} selected={selectedTech.technology_id === tech.technology_id} focusId={selectedTech.technology_id ? selectedTech.technology_id : 0} selectTech={this.selectTech} />
              </span>
            )
          }
        </Col>

        <Col lg="6" xs="12">
          {Object.keys(selectedTech).length > 1 ? <div key={selectedTech.technology_id}><hr className="page-hr" />
            <CSSTransition key={selectedTech.technology_id} in={true} enter={true} exit={true} appear={true} timeout={1000} classNames="fadePortfolio" unmountOnExit><div>
              <h3>{this.projectField('technology_name')}</h3>
              {this.projectField('technology_experience')}
              
              {curr_user ? this.projectField('technology_hex_color') : ""}
              {selectedTech.projects && selectedTech.projects.length > 0 ? <div>
                <h4>Projects:</h4>

                {selectedTech.projects.map(project => <span>
                  <Link className="plain-link" to={`/portfolio?project=${project.project_id}`}>{project.project_name}</Link>
                  {curr_user ? <span data-project-tech-id={project.project_to_technology_id} onClick={this.deleteProjectConnection}>-x</span> : "" }

                </span>)} 

              </div> : ""}

                  {curr_user ? <span onClick={this.deleteTechnology}>DELETE technology</span> : "" }

            </div></CSSTransition></div>
            : ""}
        </Col>
      </Row>



    </div>
  }
}


export default withRouter(ProfessionalRight)
