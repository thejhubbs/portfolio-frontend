import React from 'react';
import Menu from './menu';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        var headerStyle = {
            padding: '10px',
            textAlign: 'center',
            position: 'absolute',
            width: '450px'
        }
        
        return <div className="page-header" style={headerStyle}>
            <Menu />
        </div>
    }
}

export default Header;