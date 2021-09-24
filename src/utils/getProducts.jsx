export const getProducts = async (id = 0) => {
  console.log("getProductos id:", id);

  const url = `https://fakestoreapi.com/products/${id !== 0 ? id : ""} `;
  const resp = await fetch(url);
  const data = await resp.json();

  if (Array.isArray(data)) {
    const productos = data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: item.image,
        description: item.description,
        category: item.category,
        price: item.price,
      };
    });

    return productos;
  } else {
    return data;
  }
};
