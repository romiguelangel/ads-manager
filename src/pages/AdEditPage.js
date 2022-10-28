import { useParams } from 'react-router-dom';
import { AdForm } from '../components/AdForm/AdForm';

const AdEditPage = () => {
  const { productId, adId } = useParams();
  const action = adId ? 'Update' : 'Create';

  return (
    <>
      <h1>{`${action} ad ${adId ?? ''} of product ${productId}`}</h1>
      <AdForm productId={productId} adId={adId} />
    </>
  );
};

export { AdEditPage };
