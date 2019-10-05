import React from 'react';
import {Link} from 'react-router-dom'
import ContactCode from './helpers/codeTexts/contactCode'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.pageChange({
            path: "/contact",
            bg: "bg2",
            size: "small"
        })
    }

    render() {
        var formStyle = {
            display:'block',
            width:'100%',
            margin:'10px auto',
            padding:'4px'
        }

        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}
        style.width = {width: "450px"}

        return  <div className="page-overview">
            <div className="page-body-bg" style={style.width} >
                <div className="page-body" style={style.width} >

                    <div className="tfc-lg">

                        <h1 className="tfc-gy">//Say bye to the user</h1>
                        <ContactCode />

                        <div>
                          <Link className="page-button" to="/">Home</Link>
                          <Link className="page-button" to="/gallery">Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="extra-window">
            <h3>I seem to have missed you!<br />
                Please leave a message after the...</h3>

              <h1>Ema Git Upw LIn</h1>

              <p>Or send a message through the site</p>
            <form>
                <input style={formStyle} type="text" name="name" placeholder="Your Name" />
                <input style={formStyle} type="text" name="email"  placeholder="Reply email" />
                <input style={formStyle} type="text" name="company" placeholder="Company/Interest"  />

                <textarea style={formStyle} name="message"  placeholder="Your Message" />
                <button type="submit">Contact</button>
            </form>

            </div>
        </div>

    }
}

export default Contact;
