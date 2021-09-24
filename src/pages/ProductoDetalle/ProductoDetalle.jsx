import React, { useMemo, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import Loading from "../../components/common/Loading";
import CartContext from "../../context/cart/CartContext";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { agregarProducto } from "../../utils/appCart";
import "./sass/ProductoDetalle.scss";

const ProductoDetalle = ({ history }) => {
  const { productoId } = useParams();

  const { addToCart } = useContext(CartContext);

  //const {  producto } = useMemo(() => useFetchProducts( productoId ), [ productoId ]);
  const { data: producto, loading } = useFetchProducts(productoId);

  console.log("saleform-producto:", producto);

  const handleAddToCart = (id, title, price, image) => {
    const producto = {
      id,
      titulo: title,
      precio: price,
      imagen: image,
      cantidad: 1,
    };
    const productoLS = agregarProducto(producto);
    addToCart(productoLS);
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

  let arrayRate = [];
  for (let i = 1; i < rating?.rate; i++) {
    arrayRate.push(i);
  }

  return (
    <>
      {(loading && (
        <p className="animate__animated animate__flash">
          <Loading />
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

                <div className="saleform-info__rate">
                  {rating?.rate > 0 &&
                    arrayRate.map((index) => (
                      <img
                        key={index}
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828884.svg?token=exp=1632520090~hmac=9d31ba4d1fe7c151cfe182b6a6a0d4fa"
                        alt=""
                      />
                    ))}
                    <span> Calificación: {rating.count}</span>
                    
                </div>

                <p className="saleform-info__description">{description}</p>
                <span className="saleform-info__category">{category}</span>
                <div className="saleform-info__price">
                  <span>S/{price}</span>
                </div>
                
                <div className="saleform-info__qty">
                </div>

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
