import type { NextPage } from 'next'
import styles from './Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.test}>
        Test block
      </div>
      <div id="apps" className={styles.anchor}>
        Anchor block
      </div>
    </div>
  );
}

export default Home
