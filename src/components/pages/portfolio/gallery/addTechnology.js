import React from 'react'
import axios from 'axios'

import apiPath from '../../../functionality/api'

class AddTechnology extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            technologies: []
        }
    }

    componentDidMount = () => {
        this.reload()
    }

    reload = () => {
        axios.get(apiPath('/technologies'))
            .then(res => {
                this.props.reload()
                this.setState({ technologies: res.data })
            })
    }

    toggle = () => {
        this.setState({open: !this.state.open})
    }

    addTech = (e) => {
        let pt_project_id = this.props.project.project_id
        let pt_technology_id = Number.parseInt(e.target.getAttribute('data-tech-id'))

        let data = {pt_project_id, pt_technology_id}

        
        axios.post(apiPath('/projects_to_technologies'), data)
            .then(res => {
                this.reload()
            })

    }


    render() {

        let tech = []
        this.state.technologies.map( (t) => { 
            let found = t
            this.props.project.technologies.map( (at) => at.technology_name === t.technology_name ? found = null : null )
            if(found) { tech.push(found) } 
        })

        return <div>

            <div onClick={this.toggle}>Add Technology x</div>

            {this.state.open ? <div>
                { tech.map( (t) => <div onClick={this.addTech} data-tech-id={t.technology_id} > {t.technology_name} </div>) }
            </div> : ""}

        </div>

    }

}

export default AddTechnology