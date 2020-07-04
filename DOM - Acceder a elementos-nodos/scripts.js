/* Acceder a un elemento a través de su id */
const title = document.getElementById('title');
title.textContent = 'DOM - Accediendo a nodos';
console.log(title);

/* Accede al primer elemento que coincida con el selector CSS */
const paragraph = document.querySelector('.paragraph');
paragraph.textContent = 'Cambio primer elemento que coincida con el selector CSS';
console.log(paragraph);

/* Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList */
const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);

/* Cambiar estilo color a cada párrafo según su índice */
paragraphs[0].style.color = 'red';
paragraphs[1].style.color = 'green';
paragraphs[2].style.color = 'blue';

/* Estilo a todos los párrafos color amarillo */
const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
paragraphsSpread.map(p => p.style.color = 'yellow');

/* Estilo a todos los párrafos color naranja */
const paragraphsArray = Array.from(paragraphs);
paragraphsArray.map(p => p.style.color = 'orange');
