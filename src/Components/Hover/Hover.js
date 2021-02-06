import React from "react";
import "./hover.css";

function Hover() {
    // initializing variables for sliding image gallery
    let thumbnailIndex = 0;
    let secondImage = 1;
    //function for when arrows are clicked, increments or decrements count variables then calls the move slides function
    function slideClicked(n) {
        thumbnailIndex += n;
        secondImage += n;
        moveSlides(thumbnailIndex, secondImage)
    }

    //function to move images in sliding image gallery

    function moveSlides(indexNum, secondIndexNum) {
        // all images are tagged with same class name, amount is not hard coded
        let images = document.getElementsByClassName("image");

        //if first image is decremented below 0, reset to end of array
        if (indexNum < 0) {
            thumbnailIndex = images.length - 1;
        }

        //if second image is decremented below 0, reset to array end of array
        else if (secondIndexNum < 0) {
            secondImage = images.length - 1
        }
        //if second image is incremented above array count, reset to start of gallery
        else if (secondIndexNum > images.length - 1) {
            secondImage = 0;
        }

        //if first image is increased above array count, reset to start of gallery
        else if (indexNum > images.length - 1) {
            thumbnailIndex = 0;
        }
        //hide ALL images
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        //show two desired images, in desired grid area specifics.
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