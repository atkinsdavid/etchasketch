const newBtn = document.getElementById('new-grid');
const clearBtn = document.getElementById('reset');
const container = document.getElementById('grid-container');
let cells = [];

function newGrid(){
    let num = prompt("Please enter a whole number between 1-100.")
    if (isNaN(num)){
        alert("Input must be a number.")
    } else if (num > 100 || num < 1) {
        alert("Input must be between 1-100.")
    } else if (Number.isInteger(num*1)) {
        while (container.firstChild){
            container.removeChild(container.firstChild);
        };
        for (let i = 1 ; i <= num ; i++) {
            const row = document.createElement('div');
            container.appendChild(row);
            row.setAttribute('id','row_' + i);
            row.classList.add('row');
            for (let n = 1 ; n <= num ; n++) {
                const cell = document.createElement('div'); 
                row.appendChild(cell);
                cell.setAttribute('id','cell_' + n*i);
                cell.setAttribute('light',50);
                cell.classList.add('cell');
            }
        }
        cells = document.getElementsByClassName('cell');
    } else {
        alert("Input must be a whole number (no decimals or fractions).")
    };
    for (let i = 0; i < cells.length ; i++) {
        cells[i].addEventListener('mouseover', () => {
            let cellLightness = Number(cells[i].getAttribute('light'));
            function randomInteger(max) {
                return Math.floor(Math.random()*(max + 1));
            };
            function randomColor() {
                let hue = randomInteger(360);
                let sat = randomInteger(100);
                return `hsl(${hue},${sat}%,${cellLightness}%)`;
            };
            cells[i].style.backgroundColor = randomColor();
            if (cellLightness >0) {
                cellLightness -= 5;
            }
            cells[i].setAttribute('light',cellLightness);
        });
    };
};


newBtn.addEventListener( 'click' , newGrid);

clearBtn.addEventListener( 'click' , () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
        cell.setAttribute('light',50);
    });
});