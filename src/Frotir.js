import React from 'react';
import Footer from './Footer';
import './Frotir.css';
import Logo1 from './frotir/img14.jpg';
import Logo2 from './frotir/peskir.jpg';
import Logo3 from './frotir/baklava.jpg';
import Logo4 from './frotir/baklava1.jpg';
import Logo5 from './frotir/img18.jpg';
import Logo6 from './frotir/img19.jpg';
import { useTranslation } from 'react-i18next';

function Frotir() {
  const { t, i18n } = useTranslation();

  return (
    <div className='frotir'>
       <div className='frotir__img'>
        <a href='#frotir__img'>
          <img src={Logo1} alt='' className='frotir__logo' />
        </a>
      </div>

      <div className='frotir-lightbox' id='frotir__img'>
        <div className='frotir-lightbox__content'>
          <a href='#frotir' className='close'></a>
          <img className='frotir-lightbox__image' src={Logo1} alt='' />      
        </div>
      </div>
    
      <div className='frotir__img'>
        <a href='#frotir__img2'>
          <img src={Logo2} alt='' className='frotir__logo' />
        </a>
      </div>

      <div className='frotir-lightbox' id='frotir__img2'>
        <div className='frotir-lightbox__content'>
          <a href='#frotir' className='close'></a>
          <img className='frotir-lightbox__image' src={Logo2} alt='' />      
        </div>
      </div>
      <div className='frotir__img'>
        <a href='#frotir__img3'>
          <img src={Logo3} alt='' className='frotir__logo' />
        </a>
      </div>

      <div className='frotir-lightbox' id='frotir__img3'>
        <div className='frotir-lightbox__content'>
          <a href='#frotir' className='close'></a>
          <img className='frotir-lightbox__image' src={Logo3} alt='' />      
        </div>
      </div>

      <div className='frotir__img'>
        <a href='#frotir__img4'>
          <img src={Logo4} alt='' className='frotir__logo' />
        </a>
      </div>

      <div className='frotir-lightbox' id='frotir__img4'>
        <div className='frotir-lightbox__content'>
          <a href='#frotir' className='close'></a>
          <img className='frotir-lightbox__image' src={Logo4} alt='' />      
        </div>
      </div>
      <div className='frotir__img'>
        <a href='#frotir__img5'>
          <img src={Logo5} alt='' className='frotir__logo' />
        </a>
      </div>

      <div className='frotir-lightbox' id='frotir__img5'>
        <div className='frotir-lightbox__content'>
          <a href='#frotir' className='close'></a>
          <img className='frotir-lightbox__image' src={Logo5} alt='' />      
        </div>
      </div> <div className='frotir__img'>
        <a href='#frotir__img6'>
          <img src={Logo6} alt='' className='frotir__logo' />
        </a>
      </div>

      <div className='frotir-lightbox' id='frotir__img6'>
        <div className='frotir-lightbox__content'>
          <a href='#frotir' className='close'></a>
          <img className='frotir-lightbox__image' src={Logo6} alt='' />      
        </div>
      </div>

      <div className='frotir__text'>
      <h1>{t('frotir.1')}</h1>
       
      </div>
      <Footer />
    </div>
  );
}

export default Frotir;
