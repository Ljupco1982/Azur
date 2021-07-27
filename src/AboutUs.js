import React from 'react';
import './AboutUs.css';
import Flekeri from './flekeri.jpg';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <div className='about'>
      <div className='inner__width'>
        
        <h1 className='section__title'>{t('usAzur.1')}</h1>
        <div className='border'></div>
        <div className='services__container'>
          <div className='service__box'>
            <div className='service__icon'>
             <EmojiTransportationIcon/>
              </div>
              <div className='service__title'> {t('who.1')}</div>
              <div className='service__desc'>
              {t('production.1')}
              </div>
            </div>
            <div className='service__box'>
              <div className='service__icon'>
              <LocationCityIcon/>
              </div>
              <div className='service__title'>{t('assets.1')}</div>
              <div className='service__desc'>
              {t('facilities.1')}
              </div>
            </div>
            <div className='service__box'>
              <div className='service__icon'>
                <AllInclusiveIcon/>
              </div>
              <div className='service__title'>{t('advantages.1')}</div>
              <div className='service__desc'>
              {t('producer.1')}
              </div>
            </div>
            <div className='service__box'>
              <div className='service__icon'>
                <PeopleIcon/>
              </div>
              <div className='service__title'>{t('team.1')}</div>
              <div className='service__desc'>
              {t('team1.1')}              </div>
            </div>
            <div className='service__box'>
              <div className='service__icon'>
                <MoneyOffIcon/>
              </div>
              <div className='service__title'>{t('team.1')}</div>
              <div className='service__desc'>
              {t('philosophy.1')}
              </div>
            </div>
            <div className='service__box'>
              <div className='service__icon'>
                <LocalOfferIcon/>
              </div>
              <div className='service__title'>{t('offer.1')}</div>
              <div className='service__desc'>
              {t('offer1.1')}
          </div>
        </div>
      </div>
 </div>
 </div>
  );
}

export default AboutUs;
