/*
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById('button');
const input = document.getElementById('input');
const box = document.getElementById('box');

//Click en el botón
button.addEventListener('click', () => {
    console.log('CLICK');
})

//Doble click en el botón
button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK');
})

//Cambio de color al entrar el ratón en el box
box.addEventListener('mouseenter', () => {
    box.classList.replace('red', 'green');
})

//Cambio de color al salir el ratón del box
box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red');
})

//Pulsar con el botón izquierdo del ratón en el box
box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO EN LA CAJA CON EL BOTÓN IZQUIERDO');
})

//Soltar el botón izquierdo del ratón del box
box.addEventListener('mouseup', () => {
    console.log('HAS SOLTADO EL BOTÓN IZQUIERDO DEL RATÓN DEL BOX');
})

//Mover el ratón en el box
box.addEventListener('mousemove', () => {
    console.log('ESTÁS MOVIENDO EL RATÓN EN LA CAJA');
})

//Pulsar una tecla en el input
input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA EN EL INPUT');
})

//Soltar una tecla del input
input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA DEL INPUT');
})

//Presionar una tecla sin soltar en el input
input.addEventListener('keypress', () => {
    console.log('ESTÁS PULSANDO UNA TECLA EN EL INPUT');
})


