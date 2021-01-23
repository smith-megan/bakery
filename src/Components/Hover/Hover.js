import React from "react";
import "./hover.css";

function Hover() {
    let thumbnailIndex = 0;
    let secondImage = 1;

    function slideClicked(n) {
        thumbnailIndex += n;
        secondImage += n;
        moveSlides(thumbnailIndex, secondImage)
    }

    function moveSlides(indexNum, secondIndexNum) {
        let images = document.getElementsByClassName("image");

        if (indexNum < 0) {
            thumbnailIndex = images.length - 1;
        } else if (secondIndexNum < 0) {
            secondImage = images.length - 1
        }
        else if (secondIndexNum > images.length - 1) {
            secondImage = 0;
        }
        else if (indexNum > images.length - 1) {
            thumbnailIndex = 0;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        images[secondImage].style.gridArea = "b";
        images[thumbnailIndex].style.gridArea = "a";

        images[secondImage].style.display = "block";
        images[thumbnailIndex].style.display = "block";
    }

    return (

        <div id="images">


            <div className="slide-gallery">
                <button className="prev" onClick={() => { slideClicked(-1) }}>&#10094;</button>
                <button className="next" onClick={() => { slideClicked(1) }}>&#10095;</button>
                <div className="image image-zero" />
                <div className="image image-first" />
                <div className="image image-second" />
                <div className="image image-third" />
                <div className="image image-fourth" />
                <div className="image image-fifth" />
                <div className="image image-sixth" />
                <div className="image image-seventh" />
                <div className="image image-eighth" />
                <div className="image image-ninth" />
                <div className="image image-tenth" />
            </div>
        </div>
    )
};

export default Hover;