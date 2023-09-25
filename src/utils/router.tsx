import { useId } from 'react';
import CardDetail from '@components/CardDetail';
import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/Home';
import StaticPage from '@pages/StaticPage';

export const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    name: 'home',
    text: 'Accueil',
    catNav: 'header',
  },
  {
    path: 'staticpage',
    element: <StaticPage />,
    catNav: 'header',
    text: 'Page statique',
  },
  {
    path: 'card/:cardId',
    element: <CardDetail />,
    text: "Détail d'une carte",
  },
  {
    name: 'legal',
    text: 'Mentions légales',
    path: 'mentions-legales',
    catNav: 'footer',
  },

  {
    name: 'acessibility',
    text: 'Accessibilité : partiellement conforme',
    path: 'accessibilite',
    catNav: 'footer',
  },
];
