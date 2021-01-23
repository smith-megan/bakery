import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <a className="foot-link" href="#Order">Order</a>
            <a className="foot-link" href="#Favorites">Favorites</a>
            <a className="foot-link" href="#About">About</a>
            <a className="foot-link" href="#Home">Home</a>

            <div>
                <p className="copyright">CopyRight Oh So Sweet 2020</p>
                <p className="copyright">All Rights Reserved</p>
            </div>
        </div>
    )
};

export default Footer;