const tableContainer = document.querySelector("#table-container");

const table = document.createElement("table");

let count = 1;
for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = count;
    row.appendChild(cell);
    count++;
  }
  table.appendChild(row);
}

tableContainer.appendChild(table);