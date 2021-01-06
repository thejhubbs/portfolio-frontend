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
      <h1 className="">//Welcome the user</h1>
      <HomeCode />
      <div>
        <Link className="page-button" to="/resume">Technologies</Link>
        <Link className="page-button pb-primary" to="/portfolio">Projects</Link>
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


    return <div className="home-window" ><div>

      <h2 className="d-block d-sm-none" style={style.icon}><hr className="menu-hr" />Jordan Andrew Hubbard<hr className="menu-hr" /></h2>
      <h3 class="tfc">- Developer & Engineer</h3>
                  <h3>- Leadership oriented and <br className="d-block d-sm-none" />strong teamwork skills</h3>
                  <h3>- Javascript, HTML, CSS Expert</h3>
                  <h3>- Wordpress, Squarespace, Wix, Shopify</h3>
                  <h3>- React, Node, PHP, SQL</h3>
      <Link className="page-button" onClick={() => window.scrollTo(0, 0)} to="/resume">View My Resume</Link>



    </div>
    </div>
  }
}
