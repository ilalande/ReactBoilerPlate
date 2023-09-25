import styles from '../styles/modules/card.module.css';
import { Link } from 'react-router-dom';
import { cardType } from '@custom-types/content-types';

interface cardPropsType {
  card: cardType;
}
export default function Card({ card }: cardPropsType): JSX.Element {
  return (
    <div className={styles.card}>
      <h2>
        <Link to={`/card/${card.id}`}>{card.title}</Link>
      </h2>
      <p>{card.content}</p>
    </div>
  );
}
