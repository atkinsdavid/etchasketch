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
    let cellLightness = 50;
    cells[i].addEventListener('mouseover', () => {
        function randomInteger(max) {
            return Math.floor(Math.random()*(max + 1));
        };
        function randomColor() {
            let hue = randomInteger(360);
            let sat = randomInteger(100);
            return `hsl(${hue},${sat}%,${cellLightness}%)`;
        };
        cells[i].style.backgroundColor = randomColor();
        cellLightness -= 5;
      });
};