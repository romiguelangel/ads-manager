import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customAlphabet } from 'nanoid';

import { Input } from '../Input/Input';
import { InputImage } from '../InputImage/InputImage';
import { ProductsContext } from '../../store/ProductsContext';
import { Button } from '../Button/Button';

import './AdForm.css';

const nanoid = customAlphabet('1234567890abcdef', 10);

const AdForm = ({ productId, adId }) => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductsContext);

  const currentProduct = products.find(product => product.id === productId);
  const currentAd = currentProduct.ads.find(ad => ad.id === adId);

  const [title, setTitle] = useState(currentAd?.title || '');
  const [description, setDescription] = useState(currentAd?.description || '');

  const [image, setImage] = useState('');
  const [images, setImages] = useState(currentAd?.images || []);

  function handleSetImage(e, removeIndex) {
    e.preventDefault();

    let output = images;

    if (removeIndex >= 0) {
      output = output.filter((photo, index) => index !== removeIndex);
    } else {
      output.push(image);
    }

    setImage('');
    setImages([...output]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const updated = products.map(product => {
      if (product.id === productId) {
        const exists = product.ads.find(ad => ad.id === adId);

        if (exists) {
          product.ads.forEach((ad, index) => {
            if (ad.id === adId) {
              product.ads[index] = { id: ad.id, title, description, images };
            }
            return ad;
          });
        } else {
          product.ads.push({ id: nanoid(), title, description, images });
        }
      }

      return product;
    });

    setProducts(updated);
    navigate(`/products/${productId}/ads`);
  }

  return (
    <form className="ad-form" onSubmit={handleSubmit}>
      <fieldset>
        <Input
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <Input
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <InputImage
          name="image"
          value={image}
          onChange={e => setImage(e.target.value)}
          onSave={handleSetImage}
        />

        {images.map((image, index) => {
          return (
            <InputImage
              name="image"
              value={images[index]}
              label={false}
              onRemove={e => handleSetImage(e, index)}
              key={image}
              readOnly
            />
          );
        })}
      </fieldset>

      <Button type="submit" theme="secondary">
        Submit
      </Button>
    </form>
  );
};

export { AdForm };
