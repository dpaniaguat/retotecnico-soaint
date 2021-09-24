import React, { useMemo } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import Loading from "../common/Loading";
import { ProductoItem } from "./ProductoItem";
import "./sass/Productos.scss";

export const Productos = React.memo(({ productoId }) => {
   

  const { data: products, loading } = useFetchProducts(0);
 

  return (
    <section className="widget-productos">
      <h2>Productos</h2>

      <div className="productos">
        {loading && <Loading texto="Cargando productos..." />}
        {products.map((data) => (
          <ProductoItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
});
