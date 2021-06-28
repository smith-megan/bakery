So Special Sweets Bakery Single Page Website

Motivation: Create fully functioning modern site for client cupcake bakery.

Built with React, uses Twilio for server side form and email handling.

Code Snippet:

Logic for sliding image gallery at bottom. Made to easily add or remove images, and loop endlessly on click.

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
