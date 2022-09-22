// Select size input
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let form = document.getElementById("sizePicker");
let table = document.getElementById("pixelCanvas");

// Select color input
let colorPicker = document.getElementById("colorPicker");
let colorCode = "#000";

// color pick by the user
colorPicker.addEventListener("change", function () {
  console.log(colorPicker.value);
  colorCode = colorPicker.value;
});

// makeGrid Function
function makeGrid(e) {
  // Your code goes here!
  e.preventDefault();
  table.innerHTML = ""; // clearing the table
  console.log(height.value, width.value);
  let N = height.value * 1;
  let M = width.value * 1;

  for (let i = 0; i < N; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < M; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      td.addEventListener("click", function (e) {
        e.target.style.background = colorCode;
      });
    }
    table.appendChild(tr);
  }
}

// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", makeGrid);
