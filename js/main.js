//menu hamburguesa

const ham = document.querySelector(".ham");
const enlace = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlace.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("animado");
  });
});

//carrito

let carrito = [];
let descuento = 0;

const p = document.getElementById("resultado-final");
const input = document.getElementById("input-descuento");

const DESCUENTOS = {
  zoe: 200,
  flor: 1000,
};

function agregar(producto) {
  carrito.push(producto);
  console.log(carrito);
  alert("producto agregado correctamente");
}

function vaciarCarrito() {
  carrito = [];
  p.innerHTML = "Carrito vacio";
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    p.innerHTML = "No hay productos";
    return;
  }
  let resultadoFinal = 0;
  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    const precioProducto = producto.precio;
    resultadoFinal += precioProducto;
  }
  p.innerHTML = "PRECIO FINAL : " + (resultadoFinal - descuento);
}

function aplicarDescuento() {
  // inNaN() devuelve true si el valor no es un numero
  // si el valor es un numero devuelve false

  if (!isNaN(input.value)) {
    alert("descuento invalido: descuentos validos 'zoe' y 'flor'");
    return;
  }
  descuento = DESCUENTOS[input.value.toLowerCase()];
  alert("Descuento aplicado correctamente. Presione 'ver total' nuevamente");
}





let form = document.getElementById("myForm");

let submitButton = document.getElementById("submitButton");

 

 

// //Agregar un evento al boton

// submitButton.addEventListener("click",function(e){

//   e.preventDefault();

 

 

//   let nombreInput = document.getElementById("name");

//   let emailInput = document.getElementById("email");

 

//   let nombre = nombreInput.value;  

//   let email = emailInput.value;

 

//   console.log("Este es el nombre que mando al back "+ nombre + "y este es es el email "+ email);

// })