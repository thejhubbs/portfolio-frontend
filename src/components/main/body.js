import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Gallery from '../pages/gallery';
import Bio from '../pages/bio';
import Contact from '../pages/contact';

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        var width = { width: this.props.page.size === "small" ? "450px" : "960px" }

        return <div>
            <Route path="/" exact render={(props) => <Home {...props} pageChange={this.props.pageChange} />} />
            <Route path="/about" render={(props) => <About {...props} pageChange={this.props.pageChange} />} />
            <Route path="/bio"  render={(props) => <Bio {...props} pageChange={this.props.pageChange} />}  />
            <Route path="/contact"  render={(props) => <Contact {...props} pageChange={this.props.pageChange} />}  />
            <Route path="/gallery" render={(props) => <Gallery {...props} pageChange={this.props.pageChange} />}  />
        </div>

    }
}

export default Body;