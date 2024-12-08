const black = (elemento) => {
  elemento.style.backgroundColor = '#000';
}

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');

a.addEventListener('click', ()=>{
  black(a);
});

b.addEventListener('click', ()=>{
  black(b);
});

c.addEventListener('click', ()=>{
  black(c);
});

d.addEventListener('click', ()=>{
  black(d);
});


let currentColor = ''

const keyDiv = document.querySelector('#key')
const boxes = document.querySelector('.boxes')
const newDiv = document.createElement('div')

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "a") {
    currentColor = "pink";
    keyDiv.style.backgroundColor = currentColor;
  } else if (key === "s") {
    currentColor = "orange";
    keyDiv.style.backgroundColor = currentColor;
  } else if (key === "d") {
    currentColor = "lightblue";
    keyDiv.style.backgroundColor = currentColor;
  }

  if (key === "q") {
    currentColor = "purple";
    createNewDiv(currentColor);
  } else if (key === "w") {
    currentColor = "gray";
    createNewDiv(currentColor);
  } else if (key === "e") {
    currentColor = "brown";
    createNewDiv(currentColor);
  }
});

function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "new-div";
  newDiv.style.backgroundColor = color;
  boxes.appendChild(newDiv);
}