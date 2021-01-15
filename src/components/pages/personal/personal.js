import React from 'react';
import { Link } from 'react-router-dom'
import BioCode from './personalCode'

export class PersonalLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}

        return <div className="tfc-lg">

                  <h1>//TMI</h1>
                  <BioCode />

                  <div>
                    <Link className="page-button" to="/portfolio">Portfolio</Link>
                    <Link className="page-button" to="/contact">Contact</Link>
                  </div>
                </div>

    }
}
export class PersonalRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        var style = {}

        return <div>
                
            </div>

    }
}
