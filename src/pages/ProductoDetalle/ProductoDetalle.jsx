import React, { useState, /*useMemo, */ useContext /*useEffect*/ } from "react";
import { useParams /*, Redirect*/ } from "react-router-dom";
import Loading from "../../components/common/Loading";
import CartContext from "../../context/cart/CartContext";
// import { useFetchProducts } from "../../hooks/useFetchProducts";
import { agregarProducto } from "../../utils/appCart";
import { IconCart, IconStar } from "../../assets/icons";
import "./sass/ProductoDetalle.scss";
import { ProductosRecomendados } from "../../components/widgets/ProductosRecomendados";
import { useFetch } from "../../hooks/useFetch";
import { CounterCart } from "../../components/common/CounterCart";

const ProductoDetalle = ({ history }) => {
  const { productoId } = useParams();

  const { addToCart, showHideCart } = useContext(CartContext);
  const [isClick, setIsClick] = useState(false);
  const [currentCount, setCurrentCount] = useState(1);

  //const {  producto } = useMemo(() => useFetchProducts( productoId ), [ productoId ]);
  const { loading, data } = useFetch(
    `${process.env.REACT_APP_API_URL}/${productoId > 0 ? productoId : ""}`
  );

  const handleAddToCart = (id, title, price, image) => {
    const producto = {
      id,
      titulo: title,
      precio: price,
      imagen: image,
      cantidad: currentCount,
    };
    const productoLS = agregarProducto(producto);
    addToCart(productoLS);
    showHideCart();
  };

  // if (!Array.isArray(data) && loading) {
  //   return <Redirect to="/" />;
  // }

  /*
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
*/
  const {
    category = "",
    description = "",
    image = "",
    price = 0,
    rating = [],
    title = "",
    id = 0,
  } = !!data && data;

  let arrayRate = [];

  for (let i = 1; i < rating?.rate; i++) {
    arrayRate.push(i);
  }

  /*
  useEffect(() => {

    if (loading && data === null){
      console.log('loading, data->',loading, data)
      if (history.length <= 2) {
        history.push("/");
      } else {
        history.goBack();
      }
    }
    
    
  }, [ loading]);
*/
  return (
    <>
      {(loading && <Loading />) || (
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
                    arrayRate.map((index) => <IconStar key={index} />)}
                  <span> Calificación: {rating.count}</span>
                </div>

                <p className="saleform-info__description">{description}</p>
                <span className="saleform-info__category">{category}</span>
                <div className="saleform-info__price">
                  <span>S/{price}</span>
                </div>

                <div className="saleform-info__qty">
                  <CounterCart
                    cantidadInicial={1}
                    setClick={setIsClick}
                    isclick={isClick}
                    currentCounter={setCurrentCount}
                  />
                </div>

                <button
                  className="saleform-info__addToCart"
                  onClick={() => handleAddToCart(id, title, price, image)}
                >
                  {<IconCart />}
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
          <hr />
          <ProductosRecomendados />
        </>
      )}
    </>
  );
};

export default ProductoDetalle;
