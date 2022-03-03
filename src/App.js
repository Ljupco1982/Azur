import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Particles from 'react-particles-js';
import { particlesOptions } from './particlesOptions';
import Logo from './Logo.jpg';
import Fleker from './Fleker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Product2lica from './Product2lica';
import Products from './Products';
import Konec from './Konec';
import Frotir from './Frotir';
import Krpi from './Krpi';
import Pike from './Pike';
import Boho from './Boho';
import Contact from './Contact';
import Shop from './Shop';
import AboutUs from './AboutUs';
import GoogleMap from './GoogleMap';
import Flekeri1lice from './Flekeri1lice';
import Fleker2lica from './Fleker2lica';
import Galery from './Galery';
import Efleker from './Efleker';




function App() {
  return (
    <Router>
      <Header />
      <div className='app'>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/aboutUs' component={AboutUs} /> 
        <Route path='/galery' component={Galery} /> 
        <Route path='/contact' component={Contact} /> 
        <Route path='/product' component={Product} />
        <Route path='/product2lica' component={Product2lica} />
        <Route path='/konec' component={Konec} />
        <Route path='/fleker' component={Fleker} />
        <Route path='/frotir' component={Frotir} />
        <Route path='/krpi' component={Krpi} />
        <Route path='/pike' component={Pike} />
        <Route path='/boho' component={Boho} />
        <Route path='/shop' component={Shop} />
        <Route path='/Efleker' component={Efleker} />
        <Route path='/map' component={GoogleMap} />
        <Route path='/fleker1lice' component={Flekeri1lice} />
        <Route path='/fleker2lica' component={Fleker2lica} />
      </div>
    
    </Router>
  );
}

export default App;
