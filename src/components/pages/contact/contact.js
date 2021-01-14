import React from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap'
import ContactCode from './contactCode'

export class ContactLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}


        return  <div className="tfc-lg">

                        <h1>//Say bye to the user</h1>
                        <ContactCode />

                        <div>
                          <Link className="page-button" to="/">Home</Link>
                          <Link className="page-button" to="/portfolio">Portfolio</Link>
                        </div>
        </div>

    }
}

export class ContactRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}


        return <div id="contact">

              <Row>
                <Col xs="12">
                  <h3>I seem to have missed you!<br />
                      Please leave a message after the beep.</h3>
                      <br /> <br />
                    </Col>
                <Col  sm="6" xs="12">
              <a className="contact-icon-link" href="mailto:thejhubbs@gmail.com" target="_blank">
                <img src={require("../../../img/email.png")} height="64px" />
                <h4>Send An Email</h4>
              </a>
              </Col>
              <Col sm="6" xs="12">
              <a className="contact-icon-link" href="http://github.com/thejhubbs" target="_blank">
                <img src={require("../../../img/github.png")} height="64px" />
                <h4>GitHub</h4>
              </a>
              </Col>
              <Col sm="6" xs="12">

              <a className="contact-icon-link" href="https://www.linkedin.com/in/jordan-hubbard-5834638b/" target="_blank">
                <img src={require("../../../img/linkedin.png")} height="64px" />
                <h4>LinkedIn</h4>
              </a>
              </Col>
              <Col sm="6" xs="12">

              <a className="contact-icon-link" href="https://www.upwork.com/freelancers/~01792fc08e11e48410" target="_blank">
                <img src={require("../../../img/upwork_icon.png")} height="64px" />
                <h4>Upwork</h4>
              </a>
              </Col>

              </Row>


          </div>
    }
}
