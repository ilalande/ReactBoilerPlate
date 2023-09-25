import { useParams } from 'react-router-dom';

export default function CardDetail(): JSX.Element {
  const { cardId } = useParams();
  return (
    <div>
      <h2>Vous êtes sur la carte n°{cardId}</h2>
      <p></p>
    </div>
  );
}
