import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {


  const [thisPage, setThisPage] = useState("About");

  const CurrentSelection = () => {
    if (thisPage === 'About' ) {
      return <About />;
    }
    if (thisPage === "Projects") {
      return <Projects />;
    }
    if (thisPage === "Contact") {
      return <Contact />;
    }
    if (thisPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePage = (page) => setThisPage(page);

  return (
    <div className='main-page'>
      <Header thisPage={thisPage} handlePage={handlePage}/>
        <main>
          <CurrentSelection />
        </main>
      <Footer />
    </div>
  );
}

export default App;
