import React, { useState } from 'react';
import Footer from './Footer';
import './Boho.css';
import Boho1 from './boho/sivo1.jpg';
import Boho11 from './boho/sivo11.jpg';
import Boho2 from './boho/bez2.jpg';
import Boho22 from './boho/bez22.jpg';
import Boho3 from './boho/lesnik3.jpg';
import Boho33 from './boho/lesnik33.jpg';
import Boho4 from './boho/kafe4.jpg';
import Boho44 from './boho/kafe44.jpg';
import Boho5 from './boho/belo5.jpg';
import Boho55 from './boho/belo55.jpg';
import Boho6 from './boho/t.sivo6.jpg';
import Boho66 from './boho/t.sivo66.jpg';

import { useTranslation } from 'react-i18next';

function Pike() {
  const { t, i18n } = useTranslation();

  return (
    <div className='pike'>
      <div className='pike__img'>
        <a href='#pike__img'>
          <img src={Boho1} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Boho11} alt='' />
          <h3 className='pike__title'>
            {t('Boho.1')} {t('Grey.1')}
          </h3>
          <p className='pike__body'>
            {' '}
            <p>{t('Standard Dimension.1')}</p>
          </p>{' '}
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img2'>
          <img src={Boho2} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img2'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Boho22} alt='' />
          <h3 className='pike__title'>
            {t('Boho.1')} {t('Milky White.1')}
          </h3>
          <p className='pike__body'>
            {' '}
            <p>{t('Standard Dimension.1')}</p>
          </p>{' '}
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img3'>
          <img src={Boho3} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img3'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Boho33} alt='' />
          <h3 className='pike__title'>
            {t('Boho.1')} {t('Hazelnutt.1')}
          </h3>
          <p className='pike__body'>
            {' '}
            <p>{t('Standard Dimension.1')}</p>
          </p>{' '}
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img4'>
          <img src={Boho4} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img4'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Boho44} alt='' />
          <h3 className='pike__title'>
            {t('Boho.1')} {t('Caffe.1')}
          </h3>
          <p className='pike__body'>
            {' '}
            <p>{t('Standard Dimension.1')}</p>
          </p>{' '}
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img5'>
          <img src={Boho5} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img5'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Boho55} alt='' />
          <h3 className='pike__title'>
            {t('Boho.1')} {t('white.1')}
          </h3>
          <p className='pike__body'>
            {' '}
            <p>{t('Standard Dimension.1')}</p>
          </p>{' '}
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img6'>
          <img src={Boho6} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img6'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Boho66} alt='' />
          <h3 className='pike__title'>
            {t('Boho.1')} {t('DarkGrey.1')}
          </h3>
          <p className='pike__body'>
            {' '}
            <p>{t('Standard Dimension.1')}</p>
          </p>{' '}
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>

      <div className='pike__text'>
        <h1>{t('latest.1')}</h1>
      </div>

      <Footer />
    </div>
  );
}

export default Pike;
