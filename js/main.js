 const ham = document.querySelector(".ham");
 const enlace = document.querySelector(".enlaces-menu");
 const barras = document.querySelectorAll(".ham span");

 ham.addEventListener("click", () => {
   enlace.classList.toggle("activado");
   barras.forEach(child => { child.classList.toggle("animado") });
 });

 //carousel
 document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = carousel.querySelector(".carousel-inner");
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const itemWidth = carouselItems[0].offsetWidth;
  let currentPosition = 0;

  // Ajustar el tamaño del carrusel al tamaño del slide actual
  carouselInner.style.width = `${itemWidth * carouselItems.length}px`;

  // Evento para el botón previo
  prevBtn.addEventListener("click", function() {
    currentPosition += itemWidth;
    if (currentPosition > 0) {
      currentPosition = -itemWidth * (carouselItems.length - 1);
    }
    carouselInner.style.transform = `translateX(${currentPosition}px)`;
  });

  // Evento para el botón siguiente
  nextBtn.addEventListener("click", function() {
    currentPosition -= itemWidth;
    if (currentPosition < -itemWidth * (carouselItems.length - 1)) {
      currentPosition = 0;
    }
    carouselInner.style.transform = `translateX(${currentPosition}px)`;
  });

  // Eventos táctiles para deslizar en dispositivos móviles
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", function(event) {
    touchStartX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchend", function(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      nextBtn.click();
    } else if (touchEndX > touchStartX) {
      prevBtn.click();
    }
  }
});



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