import React from 'react';
import './Flekeri1lice.css';
import Img1 from './ednobojni/fleker1lice1.jpg';
import Img2 from './ednobojni/fleker1lice2.jpg';
import Img3 from './ednobojni/fleker1lice3.jpg';
import Img4 from './ednobojni/fleker1lice4.jpg';
import Img5 from './ednobojni/fleker1lice5.jpg';
import Img6 from './ednobojni/fleker1lice6.jpg';
import Img11 from './ednobojni/SIVO PRSKANO.jpg';
import Img21 from './ednobojni/KAFE.jpg';
import Img22 from './ednobojni/SIVO.jpg';
import Img33 from './ednobojni/img33.jpg';
import Img44 from './ednobojni/img44.jpg';
import Img7 from './ednobojni/img77.jpg';
import Img66 from './ednobojni/BEZ.jpg';
import Img77 from './ednobojni/LESNIK.jpg';
import Img88 from './ednobojni/img88.jpg';
import Img888 from './ednobojni/img888.jpg';

import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';

function Fleker1lice() {
  const { t, i18n } = useTranslation();

  return (
    <div className='flekeri1lice'>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img1} />
          <a href='#fleker__img1'>
            <img src={Img11} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img1'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img11} alt='' />
          </div>
        </div>
        <h1>{t('Light Grey.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Light Grey.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img2} />
          <a href='#fleker__img2'>
            <img src={Img22} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img2'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img22} alt='' />
          </div>
        </div>
        <h1>{t('Grey.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Grey.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img3} />
          <a href='#fleker__img33'>
            <img src={Img33} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img33'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img33} alt='' />
          </div>
        </div>
        <h1>{t('Orange.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Orange.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img4} />
          <a href='#fleker__img44'>
            <img src={Img44} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img44'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img44} alt='' />
          </div>
        </div>
        <h1>{t('Green.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Green.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img5} />
          <a href='#fleker__img21'>
            <img src={Img21} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img21'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img21} alt='' />
          </div>
        </div>
        <h1>{t('Caffe.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Caffe.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img6} />
          <a href='#fleker__img6'>
            <img src={Img66} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img6'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img66} alt='' />
          </div>
        </div>
        <h1>{t('Milky White.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Milky White.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img7} />
          <a href='#fleker__img77'>
            <img src={Img77} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img77'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img77} alt='' />
          </div>
        </div>
        <h1>{t('Hazelnutt.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Hazelnutt.1')}</h2>
          <p>{t('Hand Made.1')}</p>
          <p>{t('Standard Dimension.1')}</p>
          <p>50 x 50</p>
          <p>70 x 70</p>
          <p>70 x 150</p>
          <p>70 x 200</p>
          <p>70 x 250</p>
        </div>
      </div>
      <div className='flekeri1lice__flekeri'>
        <div className='flekeri1'>
          <img className='flekeri1__img' src={Img88} />
          <a href='#fleker__img888'>
            <img src={Img888} alt='' className='hover1__img' />
          </a>
        </div>

        <div className='fleker-lightbox' id='fleker__img888'>
          <div className='fleker-lightbox__content'>
            <a href='#fleker' className='close'></a>
            <img className='fleker-lightbox__image' src={Img888} alt='' />
          </div>
        </div>
        <h1>{t('Black.1')}</h1>
        <div className='fleker1__text'>
          <h2>{t('Black.1')}</h2>
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

export default Fleker1lice;
