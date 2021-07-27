import React from 'react';
import Logo from './krpi/krpi.jpg';
import './Krpi.css';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';


function Krpi() {
  const { t, i18n } = useTranslation();

  return (
   
  <div className='krpi'>
    <div className='krpi__img'>
      <img className='krpi__logo' src={Logo} />
    </div>
    <div className="krpi__text">
        <h1>{t('krpitext.1')}</h1>         
        </div>
    <Footer />
  </div>

  )
}

export default Krpi;
