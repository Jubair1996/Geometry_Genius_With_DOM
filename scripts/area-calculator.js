// Triangle Area
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleBaseValue = getInputFiledValueById("triangle-base-value");
  const triangleHeightValue = getInputFiledValueById("triangle-height-value");
  if (isNaN(triangleBaseValue) || isNaN(triangleHeightValue)) {
    alert("Please provide a number");
    return;
  }
  const area = (0.5 * triangleBaseValue * triangleHeightValue).toFixed(2);

  setTextArea("triangle-area", area);
});

// Rectangle Area
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleWidth = getInputFiledValueById("rectangle-width");
  const rectangleLength = getInputFiledValueById("rectangle-length");
  if (isNaN(rectangleWidth) || isNaN(rectangleLength)) {
    alert("Please provide a number");
    return;
  }
  const area = (rectangleWidth * rectangleLength).toFixed(2);
  setTextArea("rectangle-area", area);
});

// Parallelogram

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramBase = getInputFiledValueById("parallelogram-base");
    const parallelogramHeight = getInputFiledValueById("parallelogram-height");
    if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
      alert("Please provide a number");
      return;
    }
    const area = (parallelogramBase * parallelogramHeight).toFixed(2);
    setTextArea("parallelogram-area", area);
  });
// Rhombus

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusD1 = getInputFiledValueById("rhombus-d1");
  const rhombusD2 = getInputFiledValueById("rhombus-d2");
  if (isNaN(rhombusD1) || isNaN(rhombusD2)) {
    alert("Please provide a number");
    return;
  }
  const area = (0.5 * rhombusD1 * rhombusD2).toFixed(2);
  setTextArea("rhombus-area", area);
});

// Pentagon

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonP = getInputFiledValueById("pentagon-p");
  const pentagonA = getInputFiledValueById("pentagon-a");
  if (isNaN(pentagonP) || isNaN(pentagonA)) {
    alert("Please provide a number");
    return;
  }
  const area = (0.5 * pentagonP * pentagonA).toFixed(2);
  setTextArea("pentagon-area", area);
});

// Ellipse

document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseA = getInputFiledValueById("ellipse-a");
  const ellipseB = getInputFiledValueById("ellipse-b");
  if (isNaN(ellipseA) || isNaN(ellipseB)) {
    alert("Please provide a number");
    return;
  }
  const area = (3.1416 * ellipseA * ellipseB).toFixed(2);
  setTextArea("ellipse-area", area);
});
