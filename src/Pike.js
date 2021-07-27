import React, { useState } from 'react';
import Footer from './Footer';
import './Pike.css';
import Pike1 from './pike/crno.jpg';
import Pike11 from './pike/crno1.jpg';
import Pike2 from './pike/zolto.jpg';
import Pike22 from './pike/zolto1.jpg';
import Pike222 from './pike/zolto2.jpg';
import Pike2222 from './pike/zolto3.jpg';
import Pike3 from './pike/lesnik.jpg';
import Pike33 from './pike/lesnik1.jpg';
import Pike4 from './pike/bez.jpg';
import Pike44 from './pike/bez1.jpg';
import Pike5 from './pike/crveno.jpg';
import Pike55 from './pike/crveno1.jpg';
import Pike6 from './pike/sivo.jpg';
import Pike66 from './pike/sivo1.jpg';
import Pike7 from './pike/svetlo sivo.jpg';
import Pike77 from './pike/svetlo sivo1.jpg';
import Pike8 from './pike/belo.jpg';
import Pike88 from './pike/belo1.jpg';
import Pike9 from './pike/zeleno.jpg';
import Pike99 from './pike/zeleno1.jpg';
import Pike10 from './pike/kafe1.jpg';
import Pike101 from './pike/kafe2.jpg';
import { useTranslation } from 'react-i18next';

function Pike() {
  const { t, i18n } = useTranslation();

  return (
    <div className='pike'>
       <div className='pike__img'>
        <a href='#pike__img'>
          <img src={Pike1} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike1} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Black.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img1'>
          <img src={Pike11} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img1'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike11} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Black.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img2'>
          <img src={Pike2} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img2'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike2} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('yellow.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>

      <div className='pike__img'>
        <a href='#pike__img22'>
          <img src={Pike22} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img22'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike22} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('yellow.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>

      <div className='pike__img'>
        <a href='#pike__img222'>
          <img src={Pike222} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img222'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike222} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('yellow.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img2222'>
          <img src={Pike2222} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img2222'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike2222} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('yellow.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>

      <div className='pike__img'>
        <a href='#pike__img3'>
          <img src={Pike3} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img3'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike3} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Hazelnutt.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>

      <div className='pike__img'>
        <a href='#pike__img33'>
          <img src={Pike33} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img33'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike33} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Hazelnutt.1')} </h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>

      <div className='pike__img'>
        <a href='#pike__img4'>
          <img src={Pike4} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img4'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike4} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Milky White.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img44'>
          <img src={Pike44} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img44'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike44} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Milky White.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>

      <div className='pike__img'>
        <a href='#pike__img5'>
          <img src={Pike5} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img5'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike5} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('red.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img55'>
          <img src={Pike55} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img55'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike55} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('red.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img6'>
          <img src={Pike6} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img6'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike6} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('DarkGrey.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img66'>
          <img src={Pike66} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img66'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike66} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('DarkGrey.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img7'>
          <img src={Pike7} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img7'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike7} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Grey.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img77'>
          <img src={Pike77} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img77'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike77} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Grey.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img8'>
          <img src={Pike8} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img8'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike8} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('white.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img88'>
          <img src={Pike88} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img88'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike88} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('white.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img9'>
          <img src={Pike9} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img9'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike9} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Green.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img99'>
          <img src={Pike99} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img99'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike99} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Green.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__img'>
        <a href='#pike__img10'>
          <img src={Pike10} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img10'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike10} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Caffe.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
     
      <div className='pike__img'>
        <a href='#pike__img101'>
          <img src={Pike101} alt='' className='pike__logo' />
        </a>
      </div>

      <div className='pike-lightbox' id='pike__img101'>
        <div className='pike-lightbox__content'>
          <a href='#pike' className='close'></a>
          <img className='pike-lightbox__image' src={Pike101} alt='' />
          <h3 className='pike__title'>{t('Pike.1')} {t('Caffe.1')}</h3>
          <p className='pike__body'> <p>{t('Standard Dimension.1')}</p></p> <p>80 x 160</p>
          <p>80 x 200</p>
          <p>80 x 250</p>
        </div>
      </div>
      <div className='pike__text'>
        <h1>
        {t('latest.1')}
         
        </h1>
      </div>

      <Footer />
    </div>
  );
}

export default Pike;


