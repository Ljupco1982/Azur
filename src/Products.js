import React from 'react';
import './Products.css';
import { Button } from '@material-ui/core';
import Img7 from './products/img7.jpg';
import Img8 from './products/img8.jpg';
import Img9 from './products/img9.jpg';
import Img10 from './products/img10.jpg';
import Img11 from './pike/pike.jpg';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { particlesOptions1 } from './particlesOptions1';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';

function Products() {
  const { t, i18n } = useTranslation();

  return (
    <div className='products'>
      <Particles className='particles' params={particlesOptions1} />
      <div className='products__1'>
        <Link className='link' to='/konec'>
          <div className='products__product'>
            <img className='products__img17' src={Img7} />
            <Button className='product__button'>
              <h1>{t('Yarn.1')}</h1>
            </Button>
          </div>
        </Link>
        <Link className='link' to='/fleker'>
          <div className='products__product'>
            <img className='products__img10' src={Img10} />
            <Button className='product__button'>
              <h1>{t('Fleker.1')}</h1>
            </Button>
          </div>{' '}
        </Link>
      </div>
      <div className='products__2'>
        <Link className='link' to='/frotir'>
          <div className='products__product'>
            <img className='products__img9' src={Img9} />
            <Button className='product__button'>
              <h1>{t('Towel.1')}</h1>
            </Button>
          </div>
        </Link>
        <Link className='link' to='/krpi'>
          <div className='products__product'>
            <img className='products__img8' src={Img8} />

            <Button className='product__button'>
              <h1>{t('Kitchen Towel.1')}</h1>
            </Button>
          </div>
        </Link>
        <Link className='link' to='/pike'>
          <div className='products__pike'>
            <img className='products__img8' src={Img11} />
            <Button className='product__button'>
              <h1>{t('Pike.1')}</h1>
            </Button>
          </div>
        </Link>
        <Link className='link' to='/boho'>
          <div className='products__pike'>
            <img className='products__img8' src={Img11} />
            <Button className='product__button'>
              <h1>{t('Boho.1')}</h1>
            </Button>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
