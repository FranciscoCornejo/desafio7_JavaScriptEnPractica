//ejercicio 1
let formulario = document.querySelector("#formulario");

let nombre = document.querySelector("#nombre"); //id
let errorNombre = document.querySelector(".errorNombre"); //class

let asunto = document.querySelector("#asunto"); //id
let errorAsunto = document.querySelector(".errorAsunto"); //class

let mensaje = document.querySelector("#mensaje"); //id
let errorMensaje = document.querySelector(".errorMensaje"); //class

let boton = document.querySelector("#botton"); //id
let resultado = document.querySelector(".resultado");

formulario.addEventListener("submit", function (event) {
  let capturarNombre = nombre.value;
  let capturarAsunto = asunto.value;
  let capturarMensaje = mensaje.value;
  let patron = /[a-zA-Z]/gim;

  if (
    !patron.test(capturarNombre) ||
    !patron.test(capturarAsunto) ||
    !patron.test(capturarMensaje)
  ) {
    errorNombre.innerHTML = "Ingrese un nombre válido.";
    errorAsunto.innerHTML = "Ingrese un asunto válido.";
    errorMensaje.innerHTML = "Ingrese un mensaje válido.";
    event.preventDefault();
  } else {
    resultado.innerHTML = "Mensaje enviado con exito";
    event.preventDefault();
  }
});
