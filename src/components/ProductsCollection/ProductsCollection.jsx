import { useContext } from 'react';
import { ProductsContext } from '../../store/ProductsContext';
import { Product } from '../Product/Product';
import './ProductsCollection.css';

const ProductsCollection = () => {
  const { products } = useContext(ProductsContext);

  if (products?.length === 0) {
    return <h2>There are no products</h2>;
  }

  return (
    <ul className="products-collection">
      {products.map(product => {
        return (
          <li key={product.id}>
            <Product {...product} />
          </li>
        );
      })}
    </ul>
  );
};

export { ProductsCollection };
