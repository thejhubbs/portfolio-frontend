import React from 'react';
import { Link } from 'react-router-dom'
import BioCode from './helpers/codeTexts/bioCode'

class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.pageChange({
            path: "/bio",
            bg: "bg2",
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

                        <h1>//TMI</h1>
                        <BioCode />

                        <div>
                <Link className="page-button" to="/gallery">My Portfolio</Link>
                <Link className="page-button" to="/contact">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="extra-window">
            <h2>My Life & History</h2>
            <div style={{overflowY:"scroll", height:'600px'}}>
                <h3>Childhood & Hobbies</h3>
                <p>Too smart for my own good growing up, advanced classes and still bored. Always a fan of computers. Junior year
                    the math teacher assigned an extra credit project in which we were supposed to learn BASIC to program our calculators
                    to do the quadratic formula. </p>
                <h3>Early College</h3>
                <p>I went to The Ohio State University for Computer Science & Engineering. I had serveral website ideas I wanted to build,
                    and took a fascination with web development. I helped two startups create a database driven website.</p>
                <h3>Late/After College</h3>
                <p>Dropped out due to financial reasons and persued freelancing.</p>

                    title: "Artist/Designer",
                    description: "Drawing, Design, Branding, Cartoons, Painting, Music, Nature"

                </div>
            </div>
        </div>

    }
}

export default Bio;
