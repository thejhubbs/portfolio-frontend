import React from 'react';
import { Link } from 'react-router-dom'
import HomeCode from './homeCode';
import { Container, Row, Col } from 'reactstrap';

export class HomeLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var style = {}

    style.icon = { fontSize: '100px', margin: '0', padding: '0', textAlign: 'center', color: 'white' }


    return <div className="tfc-lg">
      <HomeCode />
      <div>
        <Link className="page-button" to="/resume">All Languages & Technologies</Link>
        <Link className="page-button pb-primary" to="/portfolio">Portfolio & Projects</Link>
      </div>
    </div>
  }
}

export class HomeRight extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    var style = {}

    style.icon = { fontSize: '60px', margin: '0', padding: '0', textAlign: 'center', color: 'white', textDecoration: 'none' }


    return <div className="home-bg" ><div className="home-window" ><div>
    
    </div>
    </div></div>
  }
}
