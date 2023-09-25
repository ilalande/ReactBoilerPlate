import styles from '@styles/modules/Header.module.css';
import NavItems from './NavItems';

export default function Header(): JSX.Element {
  return (
    <header role='banner' className={`section ${styles.header}`}>
      <nav role='navigation' aria-label='navigation principale'>
        <NavItems cat='header' />
      </nav>
      Header
    </header>
  );
}
