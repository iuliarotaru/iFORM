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