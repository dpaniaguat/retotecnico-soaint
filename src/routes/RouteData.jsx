// import Buscador from "../pages/Buscador/Buscador";
import Carrito from "../pages/Carrito/Carrito";
import Catalogo from "../pages/Catalogo/Catalogo";
import Contacto from "../pages/Contenido/Contacto";
import QuienesSomos from "../pages/Contenido/QuienesSomos";
import Login from "../pages/Login/Login";
import Pedidos from "../pages/Pedidos/Pedidos";
import ProductoDetalle from "../pages/ProductoDetalle/ProductoDetalle";

export const RouteData = [
  {
    menu: "Productos",
    href: "ofertas",
    rolId: 1,
    exact: true,
    privado: false,
    path: "ofertas",
    component: Catalogo,
  },
  {
    menu: "¿Quiénes somos?",
    href: "quienes-somos",
    rolId: 4,
    exact: true,
    path: "quienes-somos",
    privado: false,
    component: QuienesSomos
  },
  {
    menu: "Contáctenos",
    href: "contactenos",
    rolId: 5,
    exact: true,
    path: "contactenos",
    privado: false,
    component: Contacto
  },
  {
    menu: "Login",
    href: "login",
    rolId: 6,
    exact: true,
    path: "login",
    privado: true,
    component: Login
  },
  {
    menu: "Pedidos",
    href: "pedidos",
    rolId: 7,
    exact: true,
    path: "pedidos",
    privado: true,
    component: Pedidos
  },
  {
    menu: "producto",
    href: "producto",
    rolId: 8,
    exact: true,
    path: "/producto/:productoId",
    privado: true,
    component: ProductoDetalle
  },
  {
    menu: "carrito",
    href: "carrito",
    rolId: 9,
    exact: true,
    path: "/carrito",
    privado: true,
    component: Carrito
  }
];
