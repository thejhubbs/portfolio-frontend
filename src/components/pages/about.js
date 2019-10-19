import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import AboutCode from './helpers/codeTexts/aboutCode'
import TechItem from './techItem'
import axios from 'axios'
import qs from 'qs'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          technologies: [],
          selectedTech: {}
        }

    }

    componentDidMount = () => {
        this.props.pageChange({
            path: "/about",
            bg: "bg2",
            size: "small"
        })
        axios.get('http://localhost:4222/api/technologies')
        .then(res => {
            this.setState({technologies: res.data, selectedTech: res.data[0] })
            const query = qs.parse(this.props.location.search.substr(1))
            if(query && query.tech) {
                this.selectTech({technology_id: query.tech})
            }
        })
    }

    selectTech = (tech) => {
      axios.get(`http://localhost:4222/api/technologies/${tech.technology_id}`)
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

        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}
        style.width = {width: "450px"}

        const selectedTech = this.state.selectedTech

        return  <div className="page-overview">
            <div className="page-body-bg" style={style.width} >
                <div className="page-body" style={style.width} >

                    <div className="tfc-lg">

                        <h1>//Professional History</h1>
                        <AboutCode />

                        <div>
                            <Link className="page-button" to="/bio">Let's Get Personal</Link>
                            <Link className="page-button pb-primary" to="/gallery">Let's Get Serious</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="extra-window">

                  <h2>Technologies/Languages</h2>
                  <div style={{display:"flex"}}>
                    <div style={{width:"50%"}}>
                      <p>Please select one for experience & samples of work</p>
                    {
                      this.state.technologies.map(tech => <span className="technology-button" style={{backgroundColor: tech.technology_hex_color}}>
                        <TechItem tech={tech} focusId={selectedTech.technology_id ? selectedTech.technology_id : 0 } selectTech={this.selectTech} />
                      </span>)
                    }
                    </div>
                    <div style={{width:"50%"}}>
                      {Object.keys(selectedTech).length > 1 ? <div>
                        <h3>{selectedTech.technology_name}</h3>
                        {selectedTech.technology_experience}
                        {selectedTech.projects && selectedTech.projects.length > 0 ? <div>
                          <h4>Projects Featuring</h4>
                          {selectedTech.projects.map(project => <div>
                            <Link to={`/gallery?project=${project.project_id}`}>{project.project_name}</Link>

                          </div>)}
                        </div> : ""}

                      </div>
                      : ""}
                    </div>
                  </div>

                  <hr />


                  <h2 style={{textDecoration:"underline"}}>Work & Education History</h2>
                  {data.reverse().map(item => <div>
                    <h4>{item.title} ({item.year})</h4>
                    <p>{item.description}</p>
                    </div>
                )}
            </div>
        </div>
    }
}

export default withRouter(About);
