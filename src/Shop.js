import React from 'react';
import './Shop.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Img1 from './shop.jpg';
import Img10 from './products/img10.jpg';
import Img11 from './pike/pike.jpg';
import Img22 from './boho/lesnik3.jpg';
import { useTranslation } from 'react-i18next';

function Shop() {
    const { t, i18n } = useTranslation();

    return (
        <div className='shop'>
             <img className='shop__img' src={Img1}></img>
            <Link className='link' to='/Efleker'>
          <div className='shop__fleker'>
            <img className='products__img10' src={Img10} />
            <Button className='product__button'>
              <h1>{t('Fleker.1')}</h1>
            </Button>
          </div>
        </Link>
        <Link className='link' to='/....'>
          <div className='shop__pike'>
            <img className='products__img8' src={Img11} />
            <Button className='product__button'>
              <h1>{t('Pike.1')}</h1>
            </Button>
          </div>
        </Link>
        <Link className='link' to='/....'>
          <div className='shop__pike'>
            <img className='products__img8' src={Img22} />
            <Button className='product__button'>
              <h1>{t('Boho.1')}</h1>
            </Button>
          </div>
        </Link>
        </div>
    )
}

export default Shop
