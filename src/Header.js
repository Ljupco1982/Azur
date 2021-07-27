import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Header.css';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Logo from './logo1.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Header() {
  const [sidebar, setSidebar] = useState();
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div className='header'>
      <nav>
      <div class="header__lang">
        {/* <h1>EN/МК</h1> */}
        <ul>
          
          <div className='lang__button'>
        <button className='en' onClick={() => handleClick('en')}></button>
       
        <button className='mk' onClick={() => handleClick('mk')}></button>
      </div> 
       
        </ul>
        </div>
        <input id='nav-toggle' type='checkbox' />
        <div className='logo'>
          <img className='header__img' src={Logo}/>
        </div>

        <ul onClick={sidebar ? 'open' : 'close'} className='links'>
         <Link className='link' to='/'>
        
           <Button>
            <div className='header__links'>
              <HomeIcon />
            
                <p>{t('Home.1')}</p>
            
            </div>
          </Button>
          </Link>
          <Button>
          <Link className='link' to='/products'>
            <div className='header__links'>
              <AssessmentIcon />
            
                <p>{t('Products.1')}</p>
             
            </div>
            </Link>
          </Button>
          <Button>
          <Link className='link' to='/aboutUs'>
            <div className='header__links'>
              <InfoIcon />
              
                <p>{t('About Us.1')}</p>
            
            </div>
            </Link>
          </Button>
          <Button>
          <Link className='link' to='/galery'>
            <div className='header__links'>
              <PhotoAlbumIcon />
              
                <p>{t('Galery.1')}</p>
            
            </div>
            </Link>
          </Button>
          <Button>
          <Link className='link' to='/contact'>
            <div className='header__links'>
              <ContactMailIcon />
              
                <p>{t('Contact.1')}</p>
             
            </div>
            </Link>
          </Button>
          {/* <Button>
          <Link className='link' to='/shop'>
            <div className='header__links'>
              <ShoppingCartIcon />
              
                <p>{t('E-Shop.1')}</p>
             
            </div>
            </Link>
          </Button> */}
        </ul>
        <label for='nav-toggle' className='icon__burger'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </label>
      </nav>
    </div>
  );
}

export default Header;

