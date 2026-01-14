
const h1Element = document.getElementById("red");
const clickableHeader = document.getElementById("clickable");

  h1Element.textContent = "Adiós";
  h1Element.style.color = "orange";

clickableHeader.addEventListener("click", (event) => {
    clickableHeader.textContent = "Te engañé Xd";
    clickableHeader.style.color = "beige";

})
