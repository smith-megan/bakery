import React from "react";
import "./explanation.css";

function Explanation() {

    return (

        <div id="About">
            <div className="about-banner">
                <h1 className="about-text-title">Oh! So Sweet Is All About...</h1>
            </div>
            <div className="about-page-main">
                <div className="about-gallery">
                    <div className="home" />
                </div>
                <div className="color-div">
                    <div className="about-text">
                        <p><b className="emphasis purple">Goodies!</b> A fun and delicious way to treat tastebuds and brighten a day.</p>
                        <p><b className="emphasis orange">Parties!</b> Make party planning a breeze, and bring something special to eat for Birthday Parties, Gender Reveals, Graduations, Friendships, and More.</p>
                        <p><b className="emphasis red">Fun!</b> Creative, new, and personalized goodies to brighten up days for those that matter most.</p>
                    </div>
                </div>
                <div className="about-gallery">
                    <div className="supplies"></div>
                </div>

            </div>
            <div className="about-page-main">

                <div className="color-div">
                    <div className="about-text">
                        <p><b className="emphasis purple">Started</b> by Melanie Ulrich Oh! So Sweet has grown to bring sweetness and fun to everyone.</p>
                        <p><b className="emphasis orange">Inspired</b> by her time working in a professional bakery Melanie wanted to bring those skills and creativity to everyone around her.</p>
                        <p><b className="emphasis red">This Dream</b> is going strong serving delicious treats and creating new delights.</p>
                    </div>
                </div>
                <div className="about-gallery">
                    <div className="mixing" />
                </div>
            </div>
        </div>
    )
};

export default Explanation;