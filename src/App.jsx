import Hero from './components/Hero/Hero';
import Results from './components/Results/Results';
import WhyWhistle from './components/WhyWhistle/WhyWhistle';
import FAQ from './components/FAQ/FAQ';

import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Hero />
      <Results />
      <WhyWhistle />
      <FAQ />
   <Footer></Footer>
    </div>
  );
}

export default App;
