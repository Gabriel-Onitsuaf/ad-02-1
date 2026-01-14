
const h1Element = document.getElementById("red");

if (h1Element) {
  h1Element.textContent = "Adiós";
  h1Element.style.color = "orange";
}

const clickableHeader = document.getElementById("clickable");

clickableHeader.addEventListener("click", () => {
  clickableHeader.style.color = "brown";
});
