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
          <h2 style={style.icon}>***</h2>
          <h1 className="">//Welcome the user</h1>
          <HomeCode />
          <div>
            <Link className="page-button" to="/professional">Skills & History</Link>
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

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}


        return <div className="home-window" >
                  <h3 class="tfc">Motivated and experienced Developer & Engineer,<br />
                    with great leadership and interpersonal skills,<br />
                    seeking a full-time and long-term career;<br />
                    to express my creativity & innovation,<br />
                    and make a positive impact within<br />
                    that company and the world</h3>


                </div>
    }
}
