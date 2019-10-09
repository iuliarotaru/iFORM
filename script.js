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
    var newPrevious = slidePhoto - 1,
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
const slideshow = document.querySelector(".slide-wrap");

if (slideshow != null) {
  //make sure we don't run this script if the slideshow is not present

  let slides = document.querySelectorAll(".slide-entry"),
    slideCount = slides.length,
    currentSlide = 0,
    slideHeight = null,
    initialHeight = slides[0].clientHeight;

  slides[0].classList.add("active"); //on load, activate the first slide

  function moveToSlide(n) {
    // set up our slide navigation functionality
    slides[currentSlide].className = "slide-entry";
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].className = "slide-entry active";
    slideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = slideHeight + "px";
    window.addEventListener("resize", function() {
      resizedSlideHeight = slides[currentSlide].clientHeight;
      slideshow.style.height = resizedSlideHeight + "px";
    });
  }

  function nextSlide(e) {
    moveToSlide(currentSlide + 1);
    let code = e.keyCode;
    if (code == 39) {
      moveToSlide(currentSlide + 1);
    }
  }
  function prevSlide(e) {
    moveToSlide(currentSlide + -1);
    let code = e.keyCode;
    if (code == 37) {
      moveToSlide(currentSlide + -1);
    }
  }

  const slideHandlers = {
    nextSlide: function(element) {
      document.querySelector(element).addEventListener("click", nextSlide);
      document.body.addEventListener("keydown", nextSlide, false);
    },
    prevSlide: function(element) {
      document.querySelector(element).addEventListener("click", prevSlide);
      document.body.addEventListener("keydown", prevSlide, false);
    }
  };

  slideHandlers.nextSlide("#next-slide");
  slideHandlers.prevSlide("#prev-slide");

  // Dynamic slideshow height

  slideshow.style.height = initialHeight + "px"; //on load, set the height of the slider to the first active slide

  window.addEventListener("resize", function() {
    // adjust the height of the slidehow as the browser is resized
    let resizedHeight = slides[0].clientHeight;
    slideshow.style.height = resizedHeight + "px";
  });

  // Detect swipe events for touch devices, credit to Kirupa @ https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
  let initialX = null;
  let initialY = null;
  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  }
  function moveTouch(e) {
    if (initialX === null) {
      return;
    }
    if (initialY === null) {
      return;
    }
    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let diffX = initialX - currentX;
    let diffY = initialY - currentY;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        moveToSlide(currentSlide + 1);
      } else {
        // swiped right
        moveToSlide(currentSlide + -1);
      }
    }
    initialX = null;
    initialY = null;
    e.preventDefault();
  }

  slideshow.addEventListener("touchstart", startTouch, false);
  slideshow.addEventListener("touchmove", moveTouch, false);
}
