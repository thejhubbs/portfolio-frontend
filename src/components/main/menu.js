import React from 'react';

import { NavLink } from 'react-router-dom';

import { curr_user } from '../functionality/user'

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
    return <span>
        <NavLink className="menu-link" exact to="/">Home</NavLink>
        <NavLink className="menu-link" to="/portfolio">Portfolio</NavLink>
        <NavLink className="menu-link" to="/resume">Technologies</NavLink><br className='d-block d-sm-none' />
        <NavLink className="menu-link" to="/contact">Contact</NavLink><hr className='d-block d-sm-none menu-hr'  />
        { curr_user ? <span className="menu-link" onClick={this.props.auth.logout}>Logout</span> : "" }
    </span>
    }
}

export default Menu;
