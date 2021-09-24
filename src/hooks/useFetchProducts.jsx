import { useState, useEffect } from "react";
import { getProducts } from "../utils/getProducts";

export const useFetchProducts = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getProducts(id).then((items) => {
      setState({
        data: items,
        loading: false,
      });
    });
  }, [id]);

  return state;
};
