import React from 'react';
import './Fleker.css';
import Flekeri from './fleker/flekeri.jpg';
import Flekeri2 from './fleker/flekeri2.jpg';
import Img1 from './fleker/img1.jpg';
import Img2 from './fleker/img2.jpg';
import Img3 from './fleker/img3.jpg';
import Img4 from './fleker/img4.jpg';
import Img5 from './fleker/img5.jpg';
import Img6 from './fleker/img6.jpg';
import Img7 from './fleker/img7.jpg';
import Img8 from './fleker/img8.jpg';
import Img9 from './fleker/img9.jpg';
import Img10 from './fleker/img10.jpg';
import Img11 from './fleker/img11.jpg';
import Img12 from './fleker/img12.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';


function Fleker() {
  const { t, i18n } = useTranslation();

  return (
    <div className='fleker'>
      <div className='fleker__img about'>
        <img src={Flekeri} className='pic' />
        <h1>{t('One Colored Fleker.1')} </h1>
        <div className='fleker__button'>
          <Button variant='outlined'>
            <Link className='linnk' to='/fleker1lice'>
              <p>{t('More.1')}</p>
            </Link>
          </Button>
        </div>
      </div>

      <div className='fleker__images '>
        <div className='fleker__imgg'>
          <a href='#fleker__img1'>
            <img src={Img1} alt='' className='fleker__picture' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img1'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img7} alt='' />
          </div>
        </div>
        <div className='fleker__imgg'>
          <a href='#fleker__img2'>
            <img src={Img2} alt='' className='fleker__picture' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img2'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img8} alt='' />
          </div>
        </div>
        <div className='fleker__imgg'>
          <a href='#fleker__img3'>
            <img src={Img3} alt='' className='fleker__picture' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img3'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img9} alt='' />
          </div>
        </div>
      </div>
      <div className='fleker__img about'>
        <img src={Flekeri2} className='pic'/>

        <h1>{t('Two Colored Fleker.1')} </h1>
        <div className='fleker__button'>
          <Button variant='outlined'>
            <Link className='linnk' to='/fleker2lica'>
              <p>{t('More.1')}</p>
            </Link>
          </Button>
        </div>
      </div>

      <div className='fleker__images '>
        <div className='fleker__imgg'>
          <a href='#fleker__img4'>
            <img src={Img4} alt='' className='fleker__picture' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img4'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img10} alt='' />
          </div>
        </div>
        <div className='fleker__imgg'>
          <a href='#fleker__img5'>
            <img src={Img5} alt='' className='fleker__picture' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img5'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img11} alt='' />
          </div>
        </div>
        <div className='fleker__imgg'>
          <a href='#fleker__img6'>
            <img src={Img6} alt='' className='fleker__picture' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img6'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img12} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fleker;
