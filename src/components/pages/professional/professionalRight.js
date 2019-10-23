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
        var data = [
            {
                year: "2011-2014",
                title: "Computer Science & Engineering",
                role: "",
                description: "Engineering 101, Calculus, Algorithms, Low Level Languages (C++, C, Assembly) & Data Structures, Business & Marketing Electives"
            },
            {
                year: "2013-2015",
                title: "Web Developer",
                role: "Freelancer",
                description: "HTML, CSS, JS, JQuery, PHP, SQL, Ruby on Rails"
            },
            {
                year: "2011-2017",
                title: "Arby's",
                role: "Shift Manager",
                description: "I originally got the job out of high school. Responsible for customer service & money handling, I matured here to the point of being Shift Leader my last two years."
            },
            {
                year: "2017-Current",
                title: "JLC (Landscaping)",
                role: "Team Leader",
                description: "I quickly obtained a leadership position within months of joining the team, due to my management experience & work ethic. Responsible for running lawn-cutting routes & yearly maintenance, I really learned the value of attention to detail and being proud of your work."
            },
            {
                year: "2019-Current",
                title: "Upwork",
                role: "Freelancer",
                description: "I continued doing freelance work this year, obtaining an average of 5/5 stars on reviews."
            },
            {
                year: "2019-Current",
                title: "Lambda School",
                role: "Full Stack Web Developer",
                description: "React/Redux, Node/Express, creating a full product with a team. I'm currently attending Lambda School to cement my portfolio & technical skills to get a job."
            },
        ]



        const selectedTech = this.state.selectedTech

        return <div>

          <div id="resumeLinks">
                  <div className="page-button" style={{marginTop:'10px'}}>View Resume in Traditional Format</div>
                  <div className="page-button" style={{marginTop:'10px'}}>Download as Printable PDF</div>
          </div>
                  <h2>Technologies/Languages</h2>
                  <Row>

                      <Col lg="6" xs="12">
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

                  <div id="resumeBottom">
                  <h2 style={{textDecoration:"underline"}}>Work & Education History</h2>
                  {data.reverse().map(item => <div>
                    <h4>{item.title} ({item.year})</h4>
                    <p>{item.description}</p>
                    </div>
                )}



                <Link className="page-button d-block d-sm-none"  onClick={() => window.scrollTo(0, 0)} to="/portfolio">My Portfolio</Link>
                <Link className="page-button d-block d-sm-none" onClick={() => window.scrollTo(0, 0)} to="/contact">Contact</Link>
            </div></div>
    }
}


export default withRouter(ProfessionalRight)
