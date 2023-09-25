import styles from '@styles/modules/Home.module.css';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Vite Typescript React BoilerPlate</h1>
      <p>
        <Link to={'/staticpage'}> Link to static page</Link>
      </p>
      <Gallery />
    </div>
  );
}

export default Home;
