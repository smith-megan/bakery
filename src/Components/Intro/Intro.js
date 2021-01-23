import logo from '../../Assets/logo-03.svg';
import React from "react";
import './introduce.css';

function Intro() {
    return (
        <div id="Home">
            <div className="intro">
                <img src={logo} alt="Oh So Sweet Logo" className="intro-img"></img>
                <h1 className="intro-oh">Oh!</h1>
                <h1 className="intro-so-sweet">So Sweet</h1>
                <p className="intro-paragraph-p">Fresh, Local, Delightful Treats. Handmade and Delivered</p>
                <a className="intro-btn" href="#Order">Get Sweet</a>
            </div>
            <div className="intro-header-img">
            </div>
        </div>
    )
};

export default Intro;