Oh So Sweet Bakery Single Page Website

Motivation: Create fully functioning modern site for client cupcake bakery. 

Built with React, uses fromspree.io for server side form handling.

Code Snippet:

Logic for sliding image gallery at bottom. Made to easily add or remove images, and loop endlessly on click.

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

Contribute: Any errors, typos or best practices that need adjusting are greatly appreciated.
