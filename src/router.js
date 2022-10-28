import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { ErrorPage } from './pages/ErrorPage';

import { AdEditPage } from './pages/AdEditPage';
import { AdsPage } from './pages/AdsPage';
import { ProductsPage } from './pages/ProductsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:productId/ads',
        element: <AdsPage />,
      },
      {
        path: 'products/:productId/ads/create',
        element: <AdEditPage />,
      },
      {
        path: 'products/:productId/ads/:adId/update',
        element: <AdEditPage />,
      },
    ],
  },
]);
