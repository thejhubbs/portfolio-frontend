import React from 'react';
import {Link} from 'react-router-dom'
import HomeCode from './homeCode';
import {Container, Row, Col} from 'reactstrap';

export class HomeLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}


        return  <div className="tfc-lg">
          <h1 className="">//Welcome the user</h1>
          <HomeCode />
          <div>
            <Link className="page-button" to="/resume">Resume</Link>
            <Link className="page-button pb-primary" to="/portfolio">Portfolio</Link>
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

        style.icon = {fontSize:'60px',margin:'0',padding:'0',textAlign:'center',color:'white', textDecoration:'none'}


        return <div className="home-window" ><div>

                            <h2 className="d-block d-sm-none" style={style.icon}><hr className="menu-hr" />Jordan Andrew Hubbard<hr  className="menu-hr" /></h2>
                  <h3 class="tfc">Developer & Engineer</h3>
                  <h3>Leadership oriented and <br className="d-block d-sm-none" />strong teamwork skills</h3>
                    <h3>Seeking a full-time and<br className="d-block d-sm-none" /> long-term career</h3>
                    <h3>Where I'm encouraged to express my creativity & innovation</h3>
                  <h3>And able to make a positive impact<br className="d-block d-sm-none" /> within <br className="d-none d-sm-block" />
                    that company<br className="d-block d-sm-none" /> and the world</h3>
                  <Link className="page-button" onClick={() => window.scrollTo(0, 0)}  to="/resume">View My Resume</Link>



</div>
                </div>
    }
}
