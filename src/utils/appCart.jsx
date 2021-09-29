let articulosCarrito = [];

document.addEventListener("DOMContentLoaded", () => {
  articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
});

// // Función que añade y valida la existencia del Producto al carrito
const agregarProducto = ({ imagen, titulo, precio, id, cantidad }) => {
  const infoProducto = {
    imagen,
    titulo,
    precio,
    id,
    cantidad,
  };

  if (articulosCarrito.some((Producto) => Producto.id === infoProducto.id)) {
    const Productos = articulosCarrito.map((Producto) => {
      if (Producto.id === infoProducto.id) {
        let cantidad = parseInt(Producto.cantidad);
        cantidad++;
        Producto.cantidad = cantidad;
        return Producto;
      } else {
        return Producto;
      }
    });
    articulosCarrito = [...Productos];
  } else {
    articulosCarrito = [...articulosCarrito, infoProducto];
  }

  sincronizarStorage();

return articulosCarrito;

};

const leerDatosCarro = () => {
  articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  return articulosCarrito;
};

// Elimina el Producto del carrito
const eliminarProducto = (idProducto) => {
  // Eliminar del arreglo del carrito
  articulosCarrito = articulosCarrito.filter(
    (Producto) => Producto.id !== idProducto
  );
  sincronizarStorage();
};

// NUEVO:
const sincronizarStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
};

export { agregarProducto, leerDatosCarro, eliminarProducto,sincronizarStorage };
