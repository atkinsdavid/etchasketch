const container = document.getElementById('grid-container');

for (let i = 1 ; i <= 16 ; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.setAttribute('id','row' + i);
    row.classList.add('row');
    for (let n = 1 ; n <= 16 ; n++) {
        const cell = document.createElement('div'); 
        row.appendChild(cell);
        cell.setAttribute('id','cell' + n);
        cell.classList.add('cell');
        cell.textContent = 'Cell ' + n;
    };
};
