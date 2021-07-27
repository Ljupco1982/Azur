import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { particlesOptions1 } from './particlesOptions1';
import Logo from './Logo.jpg';
import login from './images/login.svg';
import account from './images/account.svg';
import payment from './images/payment.svg';
import lock from './images/lock.svg';
import document from './images/document.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Home.css';
import { useTranslation } from 'react-i18next';


function Home() {

  const { t, i18n } = useTranslation();
  return (

    <Router>
          <Particles className='particles' params={particlesOptions1} />

      <div className='home'>

        <section className='main'>

      <div>
          </div>

      <div className='home__content'>
        <div className='home__text'>
        <h1>{t('usAzur.1')}</h1>
          <p>
          {t('Hand Made Products With Highest Quality.1')}
            
          </p>
        </div>
        <div className='home__img'>
          <img className='home__pic' src={Logo}  />
        </div>
      </div>
      <div className="timing">
        <div className="office__time">
          
          <h3>{t('Office Hours.1')}</h3>

          <p>{t('Monday - Saturday.1')}  <font>06:00 AM - 14:00</font> PM CST</p>
          <div className="office__Number">
          <h3>{t('Do you need to call us.1')}</h3>
          
            <p><font> +389-75-443-221 </font> {t('During Business Hours.1')}</p>
          </div>
        </div>
        </div>
       
      
      <div className='arrow'></div>
            <span className='scroll'>{t('Scroll.1')}</span>
         </section> 
         <section class="services">
      
        <div class="services-heading">
        
            <h2>{t('Services Which We Provided.1')}</h2>
 <p>{t('producer.1')}</p>
           
        </div>
        
        <div class="box-container">
            <div class="box">
                <img src={login}/>
              <font>{t('Visit Us In Our Factory.1')}</font>
              <p>{t('facilities.1')}</p>
               
               
            </div>
            <div class="box">
            <img src={account}/>
                
                <font>{t('View Our Products.1')}</font>
                <p>{t('Azur.1')}</p>
                
              
            </div>
            <div class="box">
            <img src={payment}/>
            <font>{t('Select Your Plan.1')}</font>
            <p>{t('payment.1')}</p>
               
            </div>
            <div class="box">
            <img src={lock}/>
            <font>{t('Keep Up With Technology.1')}</font>
            <p>{t('technology.1')}</p>
               
            
            </div>
           
            <div class="box">
           
            <img src={document}/>
          
            <font>{t('Contact Us.1')}</font>
            <p>{t('contact.1')}
                
                  <br> 
                </br>
                {t('mob.1')}
            
                <br></br>
                {t('email.1')}
             
                </p>
               
            </div>
            
        </div>
    </section> 



      {/* <Footer /> */}
      </div>
    </Router>
    
  );
}

export default Home;
