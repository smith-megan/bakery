import React from "react";
import "./favorites.css";

function Favorites() {

    const menu = [
        ["The Chocolate-Chocolate", "A delicious chocolate cupcake with rich chocolate frosting. A real crowd favorite."],
        ["The Sweet Vanilla", "Safe, sweet and marvelous this vanilla is a safe bet for many picky flavorists."],
        ["Strawberry Punch", "A fun sweet tangy flavor topped with sliced strawberry in a cute heart, a fun treat for backyard barbeques or pool parties."],
        ["Cherry Twist", "Cherry flavored cupcake made from fresh in-season bing cherries and topped with chocolate deliciousness."],
        ["Chocolate Cheesecake", "Creamy like cheesecake and rich like chocolate this is sure to be a total hit."],
        ["Cartoon Champion", "A favorite for the littles, these bright cupcakes have custom white chocolate characters on top."]
    ]

    function buildMenu(array) {
        let builtMenu = [];
        array.forEach((item, i, arr) => {
            builtMenu.push(
                <div key={"menu" + i} className="menu">
                    <div className={"shape cupcake" + i}></div>
                    <div className="cupcake-text">
                        <h2 className="cupcake-header">{item[0]}</h2>
                        <p>{item[1]}</p>
                    </div>
                </div>)
        }
        )
        return builtMenu;
    }

    return (
        <div id="Favorites">
            <div className="favorite-banner"><h1 className="favorite-text-title">Some Favorites...</h1></div>
            <div className="main-menu">
                {buildMenu(menu)}
            </div>
        </div>
    )
};

export default Favorites;