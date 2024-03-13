import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ProductsContext } from '../context/products-context';

import ProductItem from '../components/products/ProductItem';
import './Products.css';

const Products = (props) => {
  // ? Redux method
  // ! useSelector can be used to select a slice from a state
  // ! in our example products
  // const productList = useSelector((state) => state.shop.products);

  // ? context method
  const productsList = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {productsList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
