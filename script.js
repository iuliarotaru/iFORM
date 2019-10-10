"use strict";
//Slide images area starts
//-----------------------------------------------------------
let itemClassName = "slider-photo";
let items = document.getElementsByClassName(itemClassName),
  totalItems = items.length,
  slide = 0,
  moving = true;
// update the DOM with our classes
function setInitialClasses() {
  items[totalItems - 1].classList.add("prev");
  items[0].classList.add("active");
  items[1].classList.add("next");
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
function moveCarouselTo(slide) {
  // Check if carousel is moving, if not, allow interaction
  if (!moving) {
    // temporarily disable interactivity
    disableInteraction();
    var newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;

    // Test if carousel has more than three items
    if (totalItems - 1 > 3) {
      // Checks if the new potential slide is out of bounds and sets slide numbers
      if (newPrevious <= 0) {
        oldPrevious = totalItems - 1;
      } else if (newNext >= totalItems - 1) {
        oldNext = 0;
      }

      // Check if current slide is at the beginning or end and sets slide numbers
      if (slide === 0) {
        newPrevious = totalItems - 1;
        oldPrevious = totalItems - 2;
        oldNext = slide + 1;
      } else if (slide === totalItems - 1) {
        newPrevious = slide - 1;
        newNext = 0;
        oldNext = 1;
      }
      // Based on the current slide, reset to default classes.
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;

      // Add the new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}
// Next navigation handler
function moveNext() {
  // Check if moving
  if (!moving) {
    // If it's the last slide, reset to 0, else +1
    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}
// Previous navigation handler
function movePrev() {
  // Check if moving
  if (!moving) {
    // If it's the first slide, set as the last slide, else -1
    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
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

//modal interactionts

const selectSizeBtn = document.querySelector(".selectSizeBtn");
const selectSize = document.querySelectorAll(".selectSize");
const backBtn = document.querySelector("#backToSizes");
const closeModal = document.querySelector("#closeModal");
const buyNowBtn = document.querySelector(".buy-now");

selectSize.forEach(chk => {
  chk.addEventListener("click", activateSelectSizeBtn);
});

function activateSelectSizeBtn() {
  selectSizeBtn.removeAttribute("disabled");
  selectSizeBtn.textContent = "Videre";
}

selectSizeBtn.addEventListener("click", () => {
  document.querySelector("#modalWrapper2").classList.remove("hide");
});

backBtn.addEventListener("click", () => {
  document.querySelector("#modalWrapper2").classList.add("hide");
});

closeModal.addEventListener("click", () => {
  document.querySelector(".modalBg").classList.add("hide");
});

buyNowBtn.addEventListener("click", () => {
  document.querySelector(".modalBg").classList.remove("hide");
});
console.log("set price");
const chooseNr4 = document.querySelector("#nr4");
const chooseNr6 = document.querySelector("#nr4");
const chooseNr8 = document.querySelector("#nr4");
const labelNr4 = document.querySelector("#nr4Label");
const labelNr6 = document.querySelector("#nr6Label");
const labelNr8 = document.querySelector("#nr8Label");

document.querySelectorAll("input[name=selectSubscription]").forEach(el => {
  el.addEventListener("click", e => {
    console.log(e.target.value);
    if (e.target.value == "4") {
      labelNr4.textContent = "Dit valg";
      labelNr6.textContent = "Mest populære";
      labelNr8.textContent = "";
    } else if (e.target.value == "6") {
      labelNr4.textContent = "";
      labelNr6.textContent = "Dit valg";
      labelNr8.textContent = "";
    } else if (e.target.value == "8") {
      labelNr4.textContent = "";
      labelNr6.textContent = "Mest populære";
      labelNr8.textContent = "Dit valg";
    }
  });
});
