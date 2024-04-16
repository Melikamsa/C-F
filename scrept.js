let $ = document;

let firstValue = $.querySelector(".C");
let secondValue = $.querySelector(".F");
let input = $.querySelector(".input");
let result = $.querySelector(".result");
let convertButton = $.querySelector(".convert");
let resetButton = $.querySelector(".reset");
let changeButton = $.querySelector(".change");

function convert() {
  if (input.value === "") {
    result.innerHTML = "insert correct value";
    result.style.color = "#993300";
  } else {
    if (firstValue.innerHTML === "°C") {
      let resultValue = input.value * 1.8 + 32;
      result.innerHTML = input.value + "°C to " + resultValue + "°F";
      result.style.color = "yellow";
    } else if (resultValue === 'NAN') {
        result.innerHTML = 'Enter the number in English'
    } else {
      let resultValue = ((input.value - 32) * 5) / 9;
      result.innerHTML = input.value + "°F to " + resultValue.toFixed(3) + "°C";
      result.style.color = "yellow";
    }
  }
}
function reset() {
  input.value = "";
  result.innerHTML = "";
}
function change() {
  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    input.setAttribute("placeholder", "°F");
    document.title = "°F to °C";
  } else {
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    input.setAttribute("placeholder", "°C");
    document.title = "°C to °F";
  }
}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", change);
