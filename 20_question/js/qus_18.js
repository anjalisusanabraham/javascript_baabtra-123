
const colorInput = document.getElementById("color-input");
const colorDisplay = document.getElementById("color-display");


colorInput.addEventListener("input", function () {
    const selectedColor = colorInput.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.textContent = selectedColor;
});
