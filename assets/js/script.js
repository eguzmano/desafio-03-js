const ele = document.getElementById("ele1")

const pintar = function(elemento, color = 'green'){
elemento.style.backgroundColor = color
}

ele.addEventListener("click", () => (pintar(ele, 'yellow')));