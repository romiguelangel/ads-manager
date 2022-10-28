import { useNavigate, useParams } from 'react-router-dom';
import { AdsCollection } from '../components/AdsCollection/AdsCollection';
import { Button } from '../components/Button/Button';

const AdsPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  function handleClick() {
    navigate(`/products/${productId}/ads/create`);
  }

  return (
    <section>
      <h1>Ads of product {productId}</h1>

      <Button size="block" onClick={handleClick}>
        Create ad
      </Button>
      <br />
      <AdsCollection productId={productId} />
    </section>
  );
};

export { AdsPage };
