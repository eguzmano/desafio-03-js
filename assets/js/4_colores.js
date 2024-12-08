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
  const key = event.key.toLowerCase(); // Convertimos a minúscula para evitar problemas

  // Cambiar color del div "key" para a, s, d
  if (key === "a") {
    currentColor = "pink"; // Rosado
    keyDiv.style.backgroundColor = currentColor;
  } else if (key === "s") {
    currentColor = "orange"; // Naranjo
    keyDiv.style.backgroundColor = currentColor;
  } else if (key === "d") {
    currentColor = "lightblue"; // Celeste
    keyDiv.style.backgroundColor = currentColor;
  }

  // Crear un nuevo div con color para q, w, e
  if (key === "q") {
    currentColor = "purple"; // Morado
    createNewDiv(currentColor);
  } else if (key === "w") {
    currentColor = "gray"; // Gris
    createNewDiv(currentColor);
  } else if (key === "e") {
    currentColor = "brown"; // Café
    createNewDiv(currentColor);
  }
});

// Función para crear un nuevo div con un color dado
function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "new-div";
  newDiv.style.backgroundColor = color;
  boxes.appendChild(newDiv);
}