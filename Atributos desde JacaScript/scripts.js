/*
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)

    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const title = document.getElementById('title');
const name =  document.getElementById('name');

/*//Cambio atributo type de text a date
console.log(name.getAttribute('type'));
name.setAttribute('type', 'date');
console.log(name.getAttribute('type'));*/

//Agregar y eliminar clases
console.log(title.getAttribute('class'));
title.classList.add('main-title', 'other-title');
title.classList.remove('title');
console.log(title.getAttribute('class'));

//Comprobar si contiene cierta clase
if(title.classList.contains('title')) console.log('Title tiene la clase title');
else console.log('Title no tiene la clase title');

/*
//Remplazar una clase
title.classList.replace('title', 'main-title');
console.log(title.getAttribute('class'));*/

console.log(title.innerHTML);
console.log(title.textContent);
console.log(name.value);
console.log(title);
console.log(name);

