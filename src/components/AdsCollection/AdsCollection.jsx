import { useContext } from 'react';
import { ProductsContext } from '../../store/ProductsContext';
import { Ad } from '../Ad/Ad';
import { AdForm } from '../AdForm/AdForm';
import './AdsCollection.css';

const AdsCollection = ({ productId }) => {
  const { products, setProducts } = useContext(ProductsContext);

  const product = products.find(product => product.id === productId);
  const { ads } = product;

  function handleDelete(productId, adId) {
    const updated = products.map(product => {
      if (product.id === productId) {
        product.ads = product.ads.filter(ad => ad.id !== adId);
      }

      return product;
    });

    setProducts(updated);
  }

  if (ads?.length === 0) {
    return <h2>There are no ads</h2>;
  }

  return (
    <ul className="ads-collection">
      {ads.map(ad => {
        return (
          <li key={ad.id}>
            <Ad {...ad} productId={productId} onDelete={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export { AdsCollection };
