import React from "react";
import styles from './styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wins from "./components/Wins";
import Directory from './components/Directory';
import Timesheet from './components/Timesheet';
import Services from './components/Services'
import Footer from './components/Footer';
import Philosophy from "./components/Philosophy";
import Future from "./components/Future";

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
          <Philosophy />
          <Timesheet />
          <Directory />
          <Future />
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;