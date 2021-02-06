import React from "react";
import "./works.css";

function Works() {

    return (

        <div id="Works">
            <div className="master-works">
                <div className="background"></div>
                <div className="works-main">
                    <div className="works-div">
                        <div className="works-text">
                            <h1 className="works-text-title">How it Works</h1>
                            <div className="works-paragraph">
                                <div className="works-img-1"></div>
                                <div className="works-blurb">
                                    <h3 className="works-blurb-title imagine">Imagine!</h3>
                                    <p>The special treats that would make your event shine. Be creative, custom, and ask others for fun ideas.</p>
                                </div>
                            </div>
                            <div className="works-paragraph">
                                <div className="works-img-2"></div>
                                <div className="works-blurb">
                                    <h3 className="works-blurb-title choose">Choose!</h3>
                                    <p>Flavors, frosting, and fun themes. Decide what combination is the right fit for you and set your party size to make sure there is plenty to go around.</p>
                                </div>
                            </div>
                            <div className="works-paragraph">
                                <div className="works-img-3"></div>
                                <div className="works-blurb">
                                    <h3 className="works-blurb-title enjoy">Enjoy!</h3>
                                    <p>The magical day with the delivered goodies and maybe start some ideas for your next event to make it just as great as this one.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background"></div>
            </div>
        </div>
    )
};

export default Works;