import React from 'react';
import { NavLink } from 'react-router-dom';
import { white } from 'ansi-colors';

function Menu(props) {
    return <span>
        <NavLink className="menu-link" exact to="/">Home</NavLink>
        <NavLink className="menu-link" to="/portfolio">Portfolio</NavLink>
        <NavLink className="menu-link" to="/resume">Technologies</NavLink><br className='d-block d-sm-none' />
        <NavLink className="menu-link" to="/contact">Contact</NavLink><hr className='d-block d-sm-none menu-hr'  />
    </span>
}

export default Menu;
