import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Ul/Card';
import Main from './Ul/Main';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import styles from './App.module.css';
import Connect from './Components/Connect';
import Work from './Components/Work';

const App = props => {
  return (
    <Main>
      <Card className={styles.card}>
        <div className={styles.procentage}>

        </div>
        <AboutMe />
        <Work />
        <Connect />
      </Card >
      <Footer className={styles.footer} />
    </Main>

  );
}

export default App;
