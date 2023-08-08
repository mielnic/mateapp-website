import React from "react";
import styles from './styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wins from "./components/Wins";
import Directory from './components/Directory';
import Timesheet from './components/Timesheet';
import Club from './components/Club';
import Files from './components/Files';
import Services from './components/Services'
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Wins />
          <Directory />
          <Timesheet />
          <Club />
          <Files />
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;