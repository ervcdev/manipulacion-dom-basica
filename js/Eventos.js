const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//escuchador de eventos, es un evento, 
// primero: nombre del evento, segundo: codigo js que vamos a ejecutar
// el evento js primero mira el evento js del que se eata hablando, no se pone los parentesis ya que va a buscar y luego del evento 
//ejecuta la funcion
//btn.addEventListener('click', btnOnclick)

//Escuchar evento del formulario
form.addEventListener('submit', sumarInputValues);

//mostrar en pantalla
function sumarInputValues (event) {
  //console.log({event});
  event.preventDefault(); //cancelacion de recargar pagina
  const sumaInput = parseInt(input1.value )+ parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInput;
}


//escuchar evento del boton 
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  const sumaInput = parseInt(input1.value )+ parseInt(input2.value);
  pResult,innerText = 'Resultado: ' + sumaInput;
}



