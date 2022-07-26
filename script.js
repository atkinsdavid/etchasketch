const container = document.getElementById('grid-container');
const cells = document.getElementsByClassName('cell');

for (let i = 1 ; i <= 16 ; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.setAttribute('id','row' + i);
    row.classList.add('row');
    for (let n = 1 ; n <= 16 ; n++) {
        const cell = document.createElement('div'); 
        row.appendChild(cell);
        cell.setAttribute('id','cell_' + n*i);
        cell.classList.add('cell');
        // cell.textContent = cell.id;
    };
};

for (let i = 0; i < cells.length ; i++) {
    // function func() { console.log(cells[i].id);};
    // cells[i].onclick = console.log(cells[i].id);
    cells[i].addEventListener('mouseover', () => {
        cells[i].style.backgroundColor = "black";
      });
};