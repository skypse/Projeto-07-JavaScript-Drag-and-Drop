// Variáveis Globais
let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let selectedElement = null;

// Função para verificar se é uma imagem
function isIcon(element){
  return element.tagName === "IMG";
}

// Função para pegar o contêiner pai se a imagem estiver sendo arrastada
function getDraggableElement(element) {
  return isIcon(element) ? element.parentNode : element;
}

// Adiciona eventos de dragover e drop aos elementos de destino
rightBox.addEventListener('dragover', function(e){
  e.preventDefault();
});
rightBox.addEventListener('drop', function(e){
  if (selectedElement !== null) {
    rightBox.appendChild(selectedElement);
    selectedElement = null;
  }
});

leftBox.addEventListener('dragover', function(e){
  e.preventDefault();
});
leftBox.addEventListener('drop', function(e){
  if (selectedElement !== null) {
    leftBox.appendChild(selectedElement);
    selectedElement = null;
  }
});

// Evento de arrastar cada item
for (list of lists) {
  list.addEventListener('dragstart', function(e){
    selectedElement = getDraggableElement(e.target);
    e.dataTransfer.setData('text/plain', '');
  });
}

