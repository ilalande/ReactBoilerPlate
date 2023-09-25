import styles from '../styles/modules/gallery.module.css';
import Card from './Card';
import { cardType } from '@custom-types/content-types';

const cards: cardType[] = [
  { id: 1, title: 'card1', content: 'content of card 1' },
  { id: 2, title: 'card2', content: 'content of card 2' },
  { id: 3, title: 'card3', content: 'content of card 3' },
  { id: 4, title: 'card4', content: 'content of card 4' },
];

export default function Gallery(): JSX.Element {
  return (
    <>
      <p>Here is my galley calling for cards</p>
      <div className={styles.gallery}>
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <Card card={card} />
            </div>
          );
        })}
      </div>
    </>
  );
}
