"use strict";
//Slide images area starts
//-----------------------------------------------------------
let photoClassName = "slider-photo";
let reviewClassName = "review-item";
let photos = document.getElementsByClassName(photoClassName),
  totalPhotos = photos.length,
  slidePhoto = 0,
  moving = true;

// update the DOM with our classes
function setInitialClasses() {
  photos[totalPhotos - 1].classList.add("prev");
  photos[0].classList.add("active");
  photos[1].classList.add("next");
}
// Set click events to navigation buttons
function setEventListeners() {
  let next = document.getElementsByClassName("slider-button-next")[0],
    prev = document.getElementsByClassName("slider-button-prev")[0];

  next.addEventListener("click", moveNext);
  prev.addEventListener("click", movePrev);
}
function disableInteraction() {
  moving = true;
  setTimeout(function() {
    moving = false;
  }, 500);
}
function moveCarouselTo(slidePhoto) {
  // Check if carousel is moving, if not, allow interaction
  if (!moving) {
    // temporarily disable interactivity
    disableInteraction();
    let newPrevious = slidePhoto - 1,
      newNext = slidePhoto + 1,
      oldPrevious = slidePhoto - 2,
      oldNext = slidePhoto + 2;

    // Test if carousel has more than three items
    if (totalPhotos - 1 > 3) {
      // Checks if the new potential slide is out of bounds and sets slide numbers
      if (newPrevious <= 0) {
        oldPrevious = totalPhotos - 1;
      } else if (newNext >= totalPhotos - 1) {
        oldNext = 0;
      }

      // Check if current slide is at the beginning or end and sets slide numbers
      if (slidePhoto === 0) {
        newPrevious = totalPhotos - 1;
        oldPrevious = totalPhotos - 2;
        oldNext = slidePhoto + 1;
      } else if (slidePhoto === totalPhotos - 1) {
        newPrevious = slidePhoto - 1;
        newNext = 0;
        oldNext = 1;
      }
      // Based on the current slide, reset to default classes.
      photos[oldPrevious].className = photoClassName;
      photos[oldNext].className = photoClassName;

      // Add the new classes
      photos[newPrevious].className = photoClassName + " prev";
      photos[slidePhoto].className = photoClassName + " active";
      photos[newNext].className = photoClassName + " next";
    }
  }
}
// Next navigation handler
function moveNext() {
  // Check if moving
  if (!moving) {
    // If it's the last slide, reset to 0, else +1
    if (slidePhoto === totalPhotos - 1) {
      slidePhoto = 0;
    } else {
      slidePhoto++;
    }
    // Move carousel to updated slide
    moveCarouselTo(slidePhoto);
  }
}
// Previous navigation handler
function movePrev() {
  // Check if moving
  if (!moving) {
    // If it's the first slide, set as the last slide, else -1
    if (slidePhoto === 0) {
      slidePhoto = totalPhotos - 1;
    } else {
      slidePhoto--;
    }
    // Move carousel to updated slide
    moveCarouselTo(slidePhoto);
  }
}
// Initialise carousel
function initCarousel() {
  setInitialClasses();
  setEventListeners();
  // Set moving to false now that the carousel is ready
  moving = false;
}
initCarousel();
//Slide images area ends

//Slide reviews area starts
//------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.getElementById("prevReview").addEventListener("click", function() {
  plusSlides(-1);
});

document.getElementById("nextReview").addEventListener("click", function() {
  plusSlides(1);
});