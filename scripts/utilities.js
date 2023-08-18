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
