import React from 'react';
import { Link } from 'react-router-dom';

import './Ad.css';

const Ad = ({ productId, id, title, description, images, price, onDelete }) => {
  function deleteAd() {
    onDelete(productId, id);
  }

  return (
    <>
      <div className="facebook-ad">
        <div className="header">
          <div className="logo">
            <img src="/facebook.png" alt="Facebook logo" />
          </div>

          <div className="company">
            <p>Sports company</p>
            <span className="sponsored">Sponsored</span>
          </div>
        </div>

        <div className="images">
          <ul>
            {images.map(src => {
              return (
                <li key={src}>
                  <img src={src} alt="Ad images" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="content">
          <div>
            <p className="company">Sports company</p>
            <h4>{title}</h4>
            <p className="description">{description}</p>
          </div>

          <div>
            <button className="cta">Download</button>
          </div>
        </div>

        <div className="share-bar">
          <button>
            <span>Like</span>
          </button>

          <button>
            <span>Comment</span>
          </button>

          <button>
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="action-bar">
        <Link to={`/products/${productId}/ads/${id}/update`}>edit</Link>
        <button onClick={deleteAd}>delete</button>
      </div>
    </>
  );
};

export { Ad };
