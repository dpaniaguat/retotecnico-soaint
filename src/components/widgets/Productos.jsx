import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../common/Loading";
import { ProductoItem } from "./ProductoItem";
import "./sass/Productos.scss";

export const Productos = ({ viewHeaderCounter = false }) => {
  const { loading, data } = useFetch(process.env.REACT_APP_API_URL);

  return (
    <section className="widget-productos">
      {viewHeaderCounter && (
        <div className="header-count">
          {data && <h2>Mostrando {data.length} Productos</h2>}
        </div>
      )}

      <div className="productos">
        {loading && <Loading texto="Cargando productos..." />}
        {data && data.map((item) => <ProductoItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};
