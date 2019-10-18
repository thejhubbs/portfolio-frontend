import React from 'react';
import { NavLink } from 'react-router-dom';
import { white } from 'ansi-colors';

function Menu(props) {

    return <span>
        <NavLink className="menu-link" to="/">Home</NavLink>
        <NavLink className="menu-link" to="/gallery">Portfolio</NavLink>
        <NavLink className="menu-link" to="/about">Professional</NavLink>
        <NavLink className="menu-link" to="/bio">Personal</NavLink>
        <NavLink className="menu-link" to="/contact">Contact</NavLink>
    </span>
}

export default Menu;
