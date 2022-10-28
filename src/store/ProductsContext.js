import { useState, createContext } from 'react';
import { mapProducts } from '../lib/mapProducts';
import response from '../fixtures/response.json';

const productsMapped = mapProducts(response);

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsMapped);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
