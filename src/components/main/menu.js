import React from 'react';
import { NavLink } from 'react-router-dom';
import { white } from 'ansi-colors';

function Menu(props) {
    var linkStyle = {
        margin:'0px 5px',
        textDecoration:'none',
        color:'white'

    }

    return <span>
        <NavLink style={linkStyle} to="/">Home</NavLink>
        <NavLink style={linkStyle} to="/gallery">Portfolio</NavLink>
        <NavLink style={linkStyle} to="/about">Professional</NavLink>
        <NavLink style={linkStyle} to="/bio">Personal</NavLink>
        <NavLink style={linkStyle} to="/contact">Contact</NavLink>
    </span>
}

export default Menu;
