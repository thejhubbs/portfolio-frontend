import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
import AboutCode from './professionalCode'
import TechItem from './techItem'
import axios from 'axios'
import qs from 'qs'
import {TransitionGroup, CSSTransition} from 'react-transition-group'


class ProfessionalRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          technologies: [],
          selectedTech: {}
        }

    }

    componentDidMount = () => {
        axios.get('https://jhubbsportfolio.herokuapp.com/api/technologies')
        .then(res => {
            this.setState({technologies: res.data})
            const query = qs.parse(this.props.location.search.substr(1))
            if(query && query.tech) {
                this.selectTech({technology_id: query.tech})
            } else{
                this.selectTech({technology_id: res.data[0].technology_id})
            }
        })
    }

    selectTech = (tech) => {
      axios.get(`https://jhubbsportfolio.herokuapp.com/api/technologies/${tech.technology_id}`)
      .then(res => this.setState({selectedTech: res.data}) )
    }


    render() {
        var data = []



        const selectedTech = this.state.selectedTech
        const pdfLink = "https://docs.google.com/document/export?format=pdf&id=1-ZkXoXFkzdoZlHC8MPRU3XMDI91ZN8LuJ_fTdy6Eezc&token=AC4w5Vjdei8_nlqjy3Mi25hRqC0M5hsx4Q%3A1571880123637&ouid=116751004868990183303&includes_info_params=true"
        const docLink = "https://docs.google.com/document/d/1-ZkXoXFkzdoZlHC8MPRU3XMDI91ZN8LuJ_fTdy6Eezc/edit#heading=h.wfkgwt8t5efm"

        return <div>

          <div id="resumeLinks">
                  <a href={docLink} target="_blank" className="page-button pb-primary" style={{marginTop:'10px'}}>View Resume in Traditional Format</a>
                  <a href={pdfLink} target="_blank"  className="page-button pb-primary" style={{marginTop:'10px'}}>Download as Printable PDF</a>
          </div>
                  <h2 className="pageSeparatorHeader" >Technologies/Languages</h2>
                  <Row>

                      <Col lg="6" xs="12">
                        <br/>
                      <p>Please select one for experience & samples of work</p>
                    {
                      this.state.technologies.map(tech =>

                          <span className="technology-button" style={
                              {
                                backgroundColor: tech.technology_hex_color,
                                fontWeight: selectedTech.technology_id === tech.technology_id ? "bold" : "normal"
                              }
                            }>
                            <TechItem tech={tech} focusId={selectedTech.technology_id ? selectedTech.technology_id : 0 } selectTech={this.selectTech} />
                          </span>
                         )
                    }
                  </Col>

                      <Col lg="6" xs="12">
                      {Object.keys(selectedTech).length > 1 ? <div key={selectedTech.technology_id}><hr className="page-hr" />
                      <CSSTransition key={selectedTech.technology_id} in={true} enter={true} exit={true} appear={true} timeout={1000} classNames="fadePortfolio" unmountOnExit><div>
                        <h3>{selectedTech.technology_name}</h3>
                        {selectedTech.technology_experience}
                        {selectedTech.projects && selectedTech.projects.length > 0 ? <div>
                          <h4>Projects:</h4>
                          {selectedTech.projects.map(project => <span>
                            <Link className="plain-link"  to={`/portfolio?project=${project.project_id}`}>{project.project_name}</Link>

                          </span>)}
                        </div> : ""}

                      </div></CSSTransition></div>
                      : ""}
                    </Col>
                  </Row>



                  </div>
    }
}


export default withRouter(ProfessionalRight)
