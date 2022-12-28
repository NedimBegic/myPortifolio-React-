import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Ul/Card';
import Main from './Ul/Main';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import styles from './App.module.css';
import Connect from './Components/Connect';
import Work from './Components/Work';
import ScrollBar from './Components/ScrollBar';

const App = props => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = e => {
      const winScroll = e.target.scrollTop;
      const height = e.target.scrollHeight - e.target.clientHeight;
      const scrolled = (winScroll / height) *100;
      setScrollTop(scrolled);
  }

  return (
    <Main>
      <ScrollBar scrollTop={scrollTop}/>
      <Card onScroll={onScroll} className={styles.card}>
        <AboutMe />
        <Work />
        <Connect />
      </Card >
      <Footer className={styles.footer} />
    </Main>

  );
}

export default App;
