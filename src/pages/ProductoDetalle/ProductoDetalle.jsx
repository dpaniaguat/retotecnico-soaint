import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { agregarProducto } from "../../utils/appCart";
import "./sass/ProductoDetalle.scss";

const ProductoDetalle = ({ history }) => {
  const { productoId } = useParams();

  console.log("producto id:", productoId);

  //const {  producto } = useMemo(() => useFetchProducts( productoId ), [ productoId ]);
  const { data: producto, loading } = useFetchProducts(productoId);

  const handleAddToCart = (id, title, price, image) => {
    const producto = {
      id,
      titulo: title,
      precio: price,
      imagen: image,
      cantidad: 1,
    };
    agregarProducto(producto);
  };

  //   if (producto.length === 0) {
  //     return <Redirect to="/" />;
  //   }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { category, description, image, price, rating, title, id } = producto;

  return (
    <>
      {(loading && (
        <p className="animate__animated animate__flash">
          Cargando información del producto...
        </p>
      )) || (
        <>
          <div className="breadcrumb">
            <p>Inicio</p>
            <i>/</i>
            <span>{title}</span>
          </div>
          <div className="main-saleform">
            <div className="saleform">
              <div className="saleform-galeria">
                <img src={image} alt={title} />
              </div>
              <div className="saleform-info">
                <h2 className="saleform-info__titulo">{title}</h2>

                <p className="saleform-info__description">{description}</p>
                <span className="saleform-info__category">{category}</span>
                <div className="saleform-info__price">
                  <span>S/{price}</span>
                </div>
                <div className="saleform-info__qty"></div>
                <button
                  className="saleform-info__addToCart"
                  onClick={() => handleAddToCart(id, title, price, image)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductoDetalle;
