//DOM - Crear e insertar elementos

/*
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

//Función para reemplazar acentos
let reemplazarAcentos=function(cadena)
{
    let chars={
        "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
        "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
        "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
        "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
    let expr=/[áàéèíìóòúùñ]/ig;
    let res=cadena.replace(expr,function(e){return chars[e]});
    return res;
}

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

//Creamos un elemento de la lista
/*const itemList = document.createElement('LI');
itemList.textContent = 'Lunes';
daysList.appendChild(itemList);*/

//Añadimos las etiquetas span al título
title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>';

//Rellenamos la lista con los días
const fragment1 = document.createDocumentFragment();

for (const day of days) {
    const itemList = document.createElement('LI');
    itemList.textContent = day;
    fragment1.appendChild(itemList);
}
daysList.appendChild(fragment1);

//Rellenamos el select con los días
const fragment2 = document.createDocumentFragment();

for (const day of days) {
    const selectItem = document.createElement('OPTION');
    selectItem.setAttribute('value', reemplazarAcentos(day.toLowerCase()));
    selectItem.textContent = day;
    fragment2.appendChild(selectItem);
}
selectDays.appendChild(fragment2);
