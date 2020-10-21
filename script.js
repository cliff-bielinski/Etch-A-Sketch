let currentSize = 16;
let currentColor = 'black';
let container = document.querySelector('div.container');

createGrid(currentSize);

function createGrid(size) { 
  for (let i = 0; i < (size * size); i++){ //creates divs of SIZE squared 
    let newDiv = document.createElement('div');
    newDiv.id = `gs${i+1}`;
    newDiv.className = 'gridspace';
    newDiv.addEventListener('mouseover', (event) => {
      if (currentColor === 'rainbow'){
        event.target.style.backgroundColor = `${randomizeColor()}`;
      }
      else if (currentColor === 'pencil'){
        event.target.style.backgroundColor = `rgb(0, 0, 0)`;
        event.target.style.opacity -= '-0.1';
      }
      else {
        event.target.style.backgroundColor = `${currentColor}`;
      }
    });
    container.appendChild(newDiv);
  }
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`; //creates equally sized grid of new divs SIZE by SIZE
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function sizeGrid() { //asks user to create grid size between 1-100
  let size = +prompt('How big of a grid would you like (1-100)?');
  if (!size || size > 100 || size <= 0) {
    alert('Please pick a number between 1-100.')
    sizeGrid();
  }
  else {
    clearGrid();
    createGrid(size);
  }
}

function clearGrid(){ //resets the grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function setBlack() {
  currentColor = 'black';
}

function setRainbow() {
  currentColor = 'rainbow';
}

function setPencil() {
  currentColor = 'pencil';
}

function randomizeColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

/*
CREATE TITLE IN HTML

BUTTONS AT TOP
  Reset
  Black
  Rainbow
  Pencil

CONTAINER with flexbox vs grid
  Create container for grid


ASK USER GRID SIZE
  function that sends prompt to user
  stores response as VAR to be used in grid creation

CREATE GRID
  use FOR loop with condition < VAR to generate GRID SIZE div ROW
  append ROW to CONTAINER
    use nested FOR loop to generate GRID SIZE div GRID-SPACE
    append GRID-SPACE to ROW

SET COLOR STYLE
  IF button BLACK pressed
    COLOR FILL to black when hover over gridspace
  IF button RAINBOW pressed
    COLOR FILL to randomly generated rgb with each new hover
  IF button PENCIL pressed
    COLOR FILL with reduced opacity
  ELSE default BLACK

COLOR FILL
  WHEN mousehover over gridspace
    IF gridspace transparent - COLORFILL in COLOR STYLE
    ELSE do nothing

RESET
  prompts user to recreate grid size
  calls back CREATE GRID under new parameters set by user
*/