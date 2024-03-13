import React, { createContext, useState } from 'react';

const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

export const ProductsContext = createContext({
  products: INITIAL_PRODUCTS,
  toggleFav: (id) => {},
});

const ProductsProvider = (props) => {
  const [productsList, setProductsList] = useState(INITIAL_PRODUCTS);

  const toggleFavourite = (productId) => {
    setProductsList((currentProdList) => {
      console.log(currentProdList);
      const prodIndex = currentProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavourite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
