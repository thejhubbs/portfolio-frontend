import React from 'react';
import Menu from './menu';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <div className="page-header">
            <br />
            <img src={require('../../img/text-logo.png')} /><br />
            <Menu auth={this.props.auth} />
        </div>
    }
}

export default Header;
