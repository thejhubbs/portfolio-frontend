import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import AboutCode from './professionalCode'
import TechItem from './techItem'
import axios from 'axios'
import qs from 'qs'

export default class ProfessionalLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }



    render() {


        return  <div className="tfc-lg">

                        <h1>//Skills</h1>
                        <AboutCode />

                        <div className="d-none d-sm-block">
                            <Link className="page-button" to="/portfolio">Projects</Link>
                            <Link className="page-button pb-primary" to="/contact">Contact</Link>
                        </div>
                    </div>


    }
}
