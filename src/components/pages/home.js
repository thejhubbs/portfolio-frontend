import React from 'react';
import {Link} from 'react-router-dom'
import HomeCode from './helpers/codeTexts/homeCode';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.pageChange({
            path: "/",
            bg: "selfie",
            size: "small"
        })
    }

    render() {
        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}
        style.width = {width: "450px"}

        return  <div className="page-overview">
            <div className="page-body-bg" style={style.width} >
                <div className="page-body" style={style.width} >

                    <div className="tfc-lg">

                        <h2 style={style.icon}>&</h2>

                        <h1 className="">//Welcome the user</h1>
                        <HomeCode />

                        <div>
                            <Link className="page-button" to="/about">About Me</Link>
                            <Link className="page-button pb-primary" to="/gallery">Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="extra-window">
              <div className="home-window" >
                <h3 class="tfc">Motivated and experienced Developer & Engineer,<br />
                  with great leadership and interpersonal skills,<br />
                  seeking a full-time and long-term career;<br />
                  to express my creativity & innovation,<br />
                  and make a positive impact within<br />
                  that company and the world</h3>


              </div>

            </div>
        </div>
    }
}

export default Home;
