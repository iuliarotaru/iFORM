const digitalSubBtn = document.querySelector("#digitalSub");

digitalSubBtn.addEventListener("click", () => {
  //totalpirs changes to 50 kr less
  //du sparer changes to 50 kr more
  //button tet changes to skift tilbage til physical
  document.querySelector("#totalPriceDKK").textContent = "149 kr.";
  document.querySelector("#totalPriceDKK").style.color = "#f36";
  document.querySelector("#savingsDKK").textContent = "811 kr.";
  digitalSubBtn.textContent = "Skift tilbage til fysisk blad";
  digitalSubBtn.classList.add("physicalSubBtn");

  const physicalSubBtn = document.querySelector(".physicalSubBtn");

  physicalSubBtn.addEventListener("click", () => {
    document.querySelector("#totalPriceDKK").textContent = "199 kr.";
    document.querySelector("#totalPriceDKK").style.color = "#000";
    document.querySelector("#savingsDKK").textContent = "761 kr.";
    physicalSubBtn.textContent = "Skift til digitalt abonnement";
    physicalSubBtn.classList.remove("physicalSubBtn");
  });
});
