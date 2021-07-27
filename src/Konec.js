import React, {useState} from 'react';
import Logo from './konec/konec.jpg';
import Logo1 from './konec/img11.jpg';
import Logo2 from './konec/img12.jpg';
import Logo3 from './konec/img13.jpg';
import Logo4 from './konec/img111.jpg';
import Logo5 from './konec/img222.jpg';
import './Konec.css';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



function Konec() {
  const [show, setShow] = useState('');
  const { t, i18n } = useTranslation();


  return (
   
      <div className='konec'>
           <div className='konec__img'>
        <a href='#konec__img'>
          <img src={Logo} alt='' className='konec__logo' />
        </a>
      </div>

      <div className='konec-lightbox' id='konec__img'>
        <div className='konec-lightbox__content'>
          <a href='#konec' className='close'></a>
          <img className='konec-lightbox__image' src={Logo} alt='' />      
        </div>
      </div>

           <div className='konec__img'>
        <a href='#konec__img5'>
          <img src={Logo5} alt='' className='konec__logo' />
        </a>
      </div>

      <div className='konec-lightbox' id='konec__img5'>
        <div className='konec-lightbox__content'>
          <a href='#konec' className='close'></a>
          <img className='konec-lightbox__image' src={Logo5} alt='' />      
        </div>
      </div>
      <div className='konec__img'>
        <a href='#konec__img2'>
          <img src={Logo2} alt='' className='konec__logo' />
        </a>
      </div>

      <div className='konec-lightbox' id='konec__img2'>
        <div className='konec-lightbox__content'>
          <a href='#konec' className='close'></a>
          <img className='konec-lightbox__image' src={Logo2} alt='' />      
        </div>
      </div>

      <div className='konec__img'>
        <a href='#konec__img4'>
          <img src={Logo4} alt='' className='konec__logo' />
        </a>
      </div>

      <div className='konec-lightbox' id='konec__img4'>
        <div className='konec-lightbox__content'>
          <a href='#konec' className='close'></a>
          <img className='konec-lightbox__image' src={Logo4} alt='' />      
        </div>
      </div>
      <div className='konec__img'>
        <a href='#konec__img3'>
          <img src={Logo3} alt='' className='konec__logo' />
        </a>
      </div>

      <div className='konec-lightbox' id='konec__img3'>
        <div className='konec-lightbox__content'>
          <a href='#konec' className='close'></a>
          <img className='konec-lightbox__image' src={Logo3} alt='' />      
        </div>
      </div>
      <div className='konec__img'>
        <a href='#konec__img1'>
          <img src={Logo1} alt='' className='konec__logo' />
        </a>
      </div>

      <div className='konec-lightbox' id='konec__img1'>
        <div className='konec-lightbox__content'>
          <a href='#konec' className='close'></a>
          <img className='konec-lightbox__image' src={Logo1} alt='' />      
        </div>
      </div>
        <div className="konec__text">
        <h1>{t('konectext.1')}</h1>         
        </div>
        <Footer />
      </div>
  
  );
}

export default Konec;
