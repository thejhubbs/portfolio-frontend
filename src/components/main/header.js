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
            <Menu auth={this.props.auth} />
        </div>
    }
}

export default Header;
