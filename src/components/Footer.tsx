import styles from '@styles/modules/footer.module.css';
import NavItems from './NavItems';

export default function Footer(): JSX.Element {
  return (
    <footer role='contentinfo' className={`section ${styles.footer}`}>
      <div className={styles.listWrapper}>
        <NavItems cat='footer' />
      </div>
    </footer>
  );
}
