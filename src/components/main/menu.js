import React from 'react';
import { NavLink } from 'react-router-dom';
import { white } from 'ansi-colors';

function Menu(props) {
    return <span>
        <NavLink className="menu-link" exact to="/">Home</NavLink>
        <NavLink className="menu-link" to="/portfolio">Portfolio</NavLink>
        <NavLink className="menu-link" to="/professional">Professional</NavLink>
        <NavLink className="menu-link" to="/personal">Personal</NavLink>
        <NavLink className="menu-link" to="/contact">Contact</NavLink>
    </span>
}

export default Menu;
