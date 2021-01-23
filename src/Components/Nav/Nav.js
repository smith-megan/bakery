import React from "react";
import "./nav.css";


function Nav() {
    return (
        <div className="nav">
            <a className="nav-link" href="#Order">Order</a>
            <a className="nav-link" href="#Favorites">Favorites</a>
            <a className="nav-link" href="#About">About</a>
            <a className="nav-link" href="#Home">Home</a>
        </div >
    )
};

export default Nav;