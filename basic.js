// Selector: #container
const container = document.querySelector("#container");

// Create grid with 20x20 divs
let totalNumbersDivs = 20;


function createGrid(squaresPerSide) {
    container.innerHTML = '';
    totalNumbersDivs = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalNumbersDivs; i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);
    }

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    // Add event listeners to new divs
    const divs = document.querySelectorAll(".content");
    divs.forEach((div) => {
        div.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = randomColor;
        });
    });
}

// Prompt for new grid size
function diffrentSquare() {
    let squarePrompt = prompt("Enter the number of squares you want to create (1-100): ");
    if (squarePrompt > 100 || squarePrompt < 1) {
        alert("Please enter a number between 1-100.");
        return;
    }
    createGrid(squarePrompt);
}

// Reset drawing
function resetDrawing() {
    const divs = document.querySelectorAll(".content");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
}

createGrid(20);