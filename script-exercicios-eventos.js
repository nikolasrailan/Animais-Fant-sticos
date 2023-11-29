const img = document.querySelector('img');

function callback(event){
  console.log(event);
}

img.addEventListener('click', callback);

const imgs = document.querySelector('.animais-lista')

// console.log(imgs);

// imgs.addEventListener('click', callbacklista)

function callbacklista(event){
  console.log(event.target);
}

const h1 = document.querySelector('h1')


function handleKey(event){
  if(event.key == 'f'){
    document.body.classList.toggle('fullscream')
  }
  // console.log(event.key);
}

window.addEventListener('keydown', handleKey);

const imagens = document.querySelectorAll('img')

function handleImg(event){
  // console.log(event.target.getAttribute('src'));
}

imagens.forEach((img) => {
  // console.log(img);
  img.addEventListener('click', handleImg)
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function adicionaClasse(event){
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');

}

links.forEach((link) => {
  link.addEventListener('click', adicionaClasse);
});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});
 

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function cliqueT(event) {
  console.log(event.key);
  if(event.key == 't'){
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', cliqueT);