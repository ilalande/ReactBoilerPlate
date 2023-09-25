import { useRouteError } from 'react-router-dom';
import { ErrorResponse } from '@remix-run/router/utils.ts';

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div id='error-page'>
      <h1>Oups!</h1>
      <p>Désolés une erreur est arrivée</p>
      <p>
        <i>{error.statusText || error.data}</i>
      </p>
    </div>
  );
}
