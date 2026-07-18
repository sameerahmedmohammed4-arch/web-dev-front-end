
// Select all boxes
const boxes = [
  document.querySelector("#box1"),
  document.querySelector("#box2"),
  document.querySelector("#box3"),
  document.querySelector("#box4")
];

// Define click colors (cycle through them if you want)
const clickColors = [
  ["cyan", "blue", "purple"],   // box1
  ["lime", "green", "olive"],   // box2
  ["pink", "red", "orange"],    // box3
  ["gray", "black", "silver"]   // box4
];

// Store original colors and texts
const defaultColors = boxes.map(box => getComputedStyle(box).backgroundColor);
const defaultTexts = boxes.map(box => box.innerHTML);

// Track click counts for each box
const clickCounts = new Array(boxes.length).fill(0);

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // Increment click count for this box
    clickCounts[index]++;

    // Pick color based on click count (cycle through array)
    const colorIndex = (clickCounts[index] - 1) % clickColors[index].length;
    box.style.backgroundColor = clickColors[index][colorIndex];

    // Update text with click count
    box.innerHTML = `clicked ${clickCounts[index]} time${clickCounts[index] > 1 ? "s" : ""}`;
  });
});


// // Select all boxes
// const boxes = [
//   document.querySelector("#box1"),
//   document.querySelector("#box2"),
//   document.querySelector("#box3"),
//   document.querySelector("#box4")
// ];

// // Define three colors for each box
// const clickColors = [
//   ["cyan", "blue", "purple"],   // box1
//   ["lime", "green", "olive"],   // box2
//   ["pink", "red", "orange"],    // box3
//   ["gray", "black", "silver"]   // box4
// ];

// // Store original colors and texts
// const defaultColors = boxes.map(box => getComputedStyle(box).backgroundColor);
// const defaultTexts = boxes.map(box => box.innerHTML);

// // Track click counts for each box
// const clickCounts = new Array(boxes.length).fill(0);

// boxes.forEach((box, index) => {
//   box.addEventListener("click", () => {
//     // Reset all other boxes to default
//     boxes.forEach((b, i) => {
//       if (i !== index) {
//         b.style.backgroundColor = defaultColors[i];
//         b.innerHTML = defaultTexts[i];
//         clickCounts[i] = 0; // reset their cycle
//       }
//     });

//     // Increment click count for this box
//     clickCounts[index]++;

//     // If within 1–3 clicks, cycle through colors
//     if (clickCounts[index] <= clickColors[index].length) {
//       box.style.backgroundColor = clickColors[index][clickCounts[index] - 1];
//       box.innerHTML = "clicked";
//     } else {
//       // After 3 clicks, reset to default
//       box.style.backgroundColor = defaultColors[index];
//       box.innerHTML = defaultTexts[index];
//       clickCounts[index] = 0; // reset cycle
//     }
//   });
// });

