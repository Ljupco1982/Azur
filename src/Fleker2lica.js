import React from 'react';
import './Fleker2lica.css';
import Img1 from './dvobojni/LESNIK BELO.jpg';
// import Img2 from './dvobojni/KAFE BELO.jpg';
import Img3 from './dvobojni/CRNO BELO.jpg';
import Img4 from './dvobojni/SIVO BELO.jpg';
import Img5 from './dvobojni/CRVENO BELO.jpg';
// import Img55 from './dvobojni/CRVENO BELO 1.jpg';
import Img6 from './dvobojni/SVETLO SIVO BELO.jpg';
import Img66 from './dvobojni/SVETLO SIVO BELO 1.jpg';
import Img7 from './dvobojni/KAFE LESNIK.jpg';
import Img77 from './dvobojni/KAFE LESNIK 1.jpg';
import Img11 from './dvobojni/LESNIK BELO 1.jpg';
import Img22 from './dvobojni/KAFE BELO 1.jpg';
import Img33 from './dvobojni/CRNO BELO 1.jpg';
import Img44 from './dvobojni/SIVO BELO 1.jpg';
import { useTranslation } from 'react-i18next';


function Fleker2lica() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='flekeri2lica'>
      <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img1} />
          <a href='#fleker__img1'>
            <img src={Img11} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img1'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img1} alt='' />
          </div>
        </div>
        <h1>{t('Hazelnutt/White.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Hazelnutt/White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      {/* <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img2} />
          <a href='#fleker__img2'>
            <img src={Img22} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img2'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img2} alt='' />
          </div>
        </div>
        <h1>{t('Caffe/White.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Caffe/White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div> */}
      <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img7} />
          <a href='#fleker__img7'>
            <img src={Img77} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img7'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img7} alt='' />
          </div>
        </div>
        <h1>{t('Caffe/Huzelnutt.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Caffe/Huzelnutt.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img3} />
          <a href='#fleker__img3'>
            <img src={Img33} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img3'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img3} alt='' />
          </div>
        </div>
        <h1>{t('Black/White.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Black/White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      {/* <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img5} />
          <a href='#fleker__img5'>
            <img src={Img55} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img5'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img5} alt='' />
          </div>
        </div>
        <h1>{t('Red/White.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Red/White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div> */}
      <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img6} />
          <a href='#fleker__img6'>
            <img src={Img66} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img6'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img6} alt='' />
          </div>
        </div>
        <h1>{t('Light Grey/White.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Light Grey/White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri2lica__flekeri'>
        <div className='flekeri2'>
          <img className='flekeri2__img' src={Img4} />
          <a href='#fleker__img4'>
            <img src={Img44} alt='' className='hover2__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img4'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img4} alt='' />
          </div>
        </div>
        <h1>{t('Grey/White.1')}</h1>
        <div className='fleker2__text'>
        <h2>{t('Grey/White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
    </div>
  );
}

export default Fleker2lica;
