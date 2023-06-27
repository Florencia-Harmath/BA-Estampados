 const ham = document.querySelector(".ham");
 const enlace = document.querySelector(".enlaces-menu");
 const barras = document.querySelectorAll(".ham span");

 ham.addEventListener("click", () => {
   enlace.classList.toggle("activado");
   barras.forEach(child => { child.classList.toggle("animado") });
 });

 //carousel
 function changeSlide(carouselId, n) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.getElementsByClassName('slides')[0];
  const slideIndex = parseInt(carousel.getAttribute('data-slide-index')) || 0;

  const newSlideIndex = slideIndex + n;
  const slideWidth = slides.offsetWidth / 3;

  if (newSlideIndex >= slides.children.length || newSlideIndex < 0) {
    return;
  }

  slides.style.transform = `translateX(-${slideWidth * newSlideIndex}px)`;
  carousel.setAttribute('data-slide-index', newSlideIndex);
}



 //clase objetos
// class Gato {
//     constructor(nombre, color, vidas, tamanio, alimento, edad, castrado) {
//         this.nombre = nombre;
//         this.color = color;
//         this.vidas = vidas;
//         this.tamanio = tamanio;
//         this.alimento = alimento;
//         this.edad = edad;
//         this.castrado = castrado;
//     }
// } 

// const pantufla = new Gato ("pantufla", "blanco y naranja", 7, "s", "whiskas", "7 meses", false);
// const mateo = new Gato ("mateo", "negro y blanco", 10, "m", "pollo", "2 anios", true);

// console.log(Gato);
// console.log(pantufla);
// console.log(mateo);

let carrito = [];
let descuento = 0;
const  p  = document.getElementById("resultado-final");

function agregar(producto) { 
  carrito.push(producto);
  console.log(carrito);
  
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



