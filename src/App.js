
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Work from './components/Works/Work';
import Service from './components/Services/Service';
import Leader from './components/Leader/Leader';
import Test from './components/Testimonial/Test';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >


      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Service/>
      <Leader/>
      <Test/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
