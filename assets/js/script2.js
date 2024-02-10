//ejercicio 2
let boton1 = document.querySelector("#btn-1");
let boton2 = document.querySelector("#btn-2");
let boton3 = document.querySelector("#btn-3");
let boton4 = document.querySelector("#btn-4");
let boton5 = document.querySelector("#btn-5");
let boton6 = document.querySelector("#btn-6");
let caja = document.querySelector("#caja");

//Función para cambiar el color de la caja
function cambiarColor(color) {
  caja.style.backgroundColor = color;
}

//colores iniciales
boton1.style.backgroundColor = "#e53e3e";
boton2.style.backgroundColor = "#dd6b20";
boton3.style.backgroundColor = "#faf089";
boton4.style.backgroundColor = "#48bb78";
boton5.style.backgroundColor = "#81e6d9";
boton6.style.backgroundColor = "#d53f8c";

//eventos de clic a cada botón
boton1.addEventListener("click", function () {
  cambiarColor(boton1.style.backgroundColor);
});

boton2.addEventListener("click", function () {
  cambiarColor(boton2.style.backgroundColor);
});

boton3.addEventListener("click", function () {
  cambiarColor(boton3.style.backgroundColor);
});

boton4.addEventListener("click", function () {
  cambiarColor(boton4.style.backgroundColor);
});

boton5.addEventListener("click", function () {
  cambiarColor(boton5.style.backgroundColor);
});

boton6.addEventListener("click", function () {
  cambiarColor(boton6.style.backgroundColor);
});
