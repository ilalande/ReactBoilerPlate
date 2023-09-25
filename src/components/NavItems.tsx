import { Link } from 'react-router-dom';
import styles from '@styles/modules/NavItems.module.css';
import { routes } from '@utils/router';

const NavItems = ({ cat }: { cat: string }) => {
  return (
    <ul className={styles.navItems}>
      {routes.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/${item.path}`}>{item.text} </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
