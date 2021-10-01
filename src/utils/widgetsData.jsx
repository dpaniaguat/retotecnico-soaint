import { Banner } from "../components/widgets/Banner";
import { Confianza } from "../components/widgets/Confianza";
import { EConfianza } from "../components/widgets/EConfianza";
import { Productos } from "../components/widgets/Productos";

//simular configuración de widgets por comercio que podrian venir desde una api

export const widgetData = [
  {
    page : 'home',
    widgets : [
      {
        id: 1,
        show: true,
        title: "",
        subtitle: "",
        tipo: 1,
        width: "100%",
        component: Banner,
      },
      {
        id: 2,
        show: true,
        title: "¿Por qué confiar en nosotros?",
        subtitle: "",
        tipo: 1,
        width: "100%",
        component: Confianza,
      },
      {
        id: 3,
        show: true,
        title: "Productos",
        subtitle: "Los mejores productos",
        tipo: 1,
        width: "100%",
        component: Productos,
      },
      {
        id: 4,
        show: true,
        title: "",
        subtitle: "",
        tipo: 1,
        width: "100%",
        component: EConfianza,
        containerBgcolor: 'white'
      }
    ]
  },
  {
    page: 'catalogo',
    widgets: []
  },
  {
    page: 'saleform',
    widgets: []
  },
  {
    page: 'carrito',
    widgets: []
  },
  {
    page: 'checkout',
    widgets: []
  }
];
