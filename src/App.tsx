import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import Stack from './components/sections/Stack';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
