 //menu hamburguesa
 
 const ham = document.querySelector(".ham");
 const enlace = document.querySelector(".enlaces-menu");
 const barras = document.querySelectorAll(".ham span");

 ham.addEventListener("click", () => {
   enlace.classList.toggle("activado");
   barras.forEach(child => { child.classList.toggle("animado") });
 });

 //carrito

let carrito = [];
let descuento = 0;
const  p  = document.getElementById("resultado-final");

function agregar(producto) { 
  carrito.push(producto);
  console.log(carrito);
  alert("producto agregado correctamente");
  
} 

function vaciarCarrito () {
  carrito = [];
  p.innerHTML = "Carrito vacio";
} 

function mostrarCarrito() {
  if (carrito.length === 0) {
    p.innerHTML = "No hay productos"
    return;
  }
  let resultadoFinal = 0;
  for (let i = 0; i <carrito.length; i++) {
    const producto = carrito[i];
    const precioProducto = producto.precio;
    resultadoFinal += precioProducto;
  }
  p.innerHTML = "PRECIO FINAL : " + (resultadoFinal - descuento);
}

const input = document.getElementById("input-descuento");

const descuentos = {
  'zoe': 200,
  'flor': 1000
}

function aplicarDescuento() {
  console.log(typeof input.value);
  if (typeof +input.value === 'number') {
    alert("descuento invalido: descuentos validos 'zoe' y 'flor'");
    return;
  }
  descuento = descuentos[input.value.toLowerCase()];
}



