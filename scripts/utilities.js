function getInputFiledValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = " ";
  return inputFieldValue;
}

function setTextArea(setTextId, area) {
  const setTextValue = document.getElementById(setTextId);
  setTextValue.innerText = area;
}

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = `
    ${
      count + 1
    } . ${areaType} ${area} cm<sup>2</sup> <button class="bg-sky-500 px-4 py-1 rounded text-white">Convert to m<sup>2</sup></button>
    `;
  calculationEntry.appendChild(p);
}
