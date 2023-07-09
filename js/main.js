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

let carrito = {};
let totalCompra = 0;

const storedCarrito = localStorage.getItem("carrito");
const storedTotalCompra = localStorage.getItem("totalCompra");

if (storedCarrito) {
  carrito = JSON.parse(storedCarrito);
}

totalCompra = parseInt(storedTotalCompra) || 0;
mostrarCarrito();
mostrarTotalCompra();

function agregar(producto) {
  const { nombre, precio } = producto;

  carrito.hasOwnProperty(nombre)
    ? carrito[nombre].cantidad++
    : (carrito[nombre] = { precio, cantidad: 1 });

  totalCompra += precio;
  mostrarCarrito();
  mostrarTotalCompra();
  alert("Producto agregado correctamente");

  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("totalCompra", totalCompra.toString());
}

function mostrarCarrito() {
  const carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = ""; 

  if (Object.keys(carrito).length === 0) {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = '<span>No hay productos</span>';
    carritoElement.appendChild(item);
  } else {
    for (const [nombreProducto, producto] of Object.entries(carrito)) {
      const { precio, cantidad } = producto;
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `<span>${nombreProducto}</span> - <span>$${precio}</span> - <span>Cantidad: ${cantidad}</span>`;
      carritoElement.appendChild(item);
    }
  }
}

function mostrarTotalCompra() {
  const totalElement = document.getElementById("totalCompra");
  totalElement.innerHTML = `$${totalCompra}`;
}

function aplicarDescuento() {
  const descuentoInput = document.getElementById("descuentoInput");
  const descuentoPalabra = descuentoInput.value.trim().toLowerCase();
  let descuento = 0;

  switch (descuentoPalabra) {
    case "flor":
      descuento = 2000;
      break;
    case "zoe":
      descuento = 1500;
      break;
    default:
      break;
  }

  if (descuento > 0) {
    totalCompra -= descuento;
    mostrarTotalCompra();
    alert("Descuento aplicado correctamente");
  } else {
    alert("Lo siento, ese codigo no posee descuento");
  }
}

function vaciarCarrito() {
  carrito = {};
  totalCompra = 0;
  mostrarCarrito();
  mostrarTotalCompra();

  localStorage.removeItem("carrito");
  localStorage.removeItem("totalCompra");
}
