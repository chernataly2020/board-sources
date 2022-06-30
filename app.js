const board = document.querySelector('#board');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22','#2ecc71' , '#DC143C', '#00BFFF', '#228B22', '#DAA520', '#800080', '#000080', '#00FF00', '#FFFF00', '#800000', '#7B68EE'];
const SQUARES_NUMBER = 841;

for (let i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor)
  
  square.addEventListener('mouseleave', () =>
    removeColor(square))
  
  board.append(square);

}

function setColor(event) {
  const element = event.target;
  const color = getRandomCalor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#2e2d2d2a';
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomCalor() {
  return colors[Math.floor(Math.random() * colors.length)]
}