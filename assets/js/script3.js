let input = document.querySelector("#valor1");
let input2 = document.querySelector("#valor2");
let boton = document.querySelector("#btn-sumar");
let boton2 = document.querySelector("#btn-restar");

let resultado = document.querySelector(".resultado");

boton.addEventListener("click", function () {
  let sumar = parseInt(input.value) + parseInt(input2.value);
  resultado.innerHTML = sumar;
});

boton2.addEventListener("click", function () {
  let restar = parseInt(input.value) - parseInt(input2.value);
  if (restar < 0) {
    restar = 0;
  }
  resultado.innerHTML = restar;
});
