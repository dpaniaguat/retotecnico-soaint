import { Banner } from "../components/widgets/Banner";
import { Confianza } from "../components/widgets/Confianza";
import { Productos } from "../components/widgets/Productos";

//simular configuración de widgets por comercio que podrian venir desde una api

export const widgetData = [
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
];
