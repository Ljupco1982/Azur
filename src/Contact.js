import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_mgobp6s',
        e.target,
        'user_kCvWSHYGeC2W30M1jEnId'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <form onSubmit={sendEmail}>
      <section className='section'>
        <div className='container'>
          <div className='contactInfo'>
            <div className='contact__info'>
              <h2>{t('ContactInfo.1')}</h2>
              <ul className='info'>
                <li>
                  <span>
                    <LocationOnIcon />
                  </span>
                  <span>{t('contact.1')}</span>
                </li>
                <li>
                  <span>
                    <MailIcon />
                  </span>
                  <span>azur.gavrilovski@gmail.com</span>
                </li>
                <li>
                  <span>
                    <CallIcon />
                  </span>
                  <span>+389-75-443-221</span>
                </li>
              </ul>
            </div>
            <div className='google'>
              <Button>
                <Link className='linnnk' to='map'>
                  <h1>{t('map.1')}</h1>
                </Link>
              </Button>
            </div>
          </div>
          <div className='contactForm'>
            <h2>{t('message.1')}</h2>
            <div className='formBox'>
              <div className='inputBox w50'>
                <input autoComplete='off' type='text' name='name' required />

                <span>{t('first.1')}</span>
              </div>
              <div className='inputBox w50'>
                <input
                  autoComplete='off'
                  type='text'
                  name='lastname'
                  required
                />
                <span>{t('last.1')}</span>
              </div>
              <div className='inputBox w50'>
                <input autoComplete='off' type='text' name='email' required />
                <span>{t('mail.1')}</span>
              </div>
              <div className='inputBox w50'>
                <input autoComplete='off' type='text' name='telefon' required />
                <span>{t('mobile.1')}</span>
              </div>
              <div className='inputBox w100'>
                <textarea type='text' name='message' required />
                <span>{t('write.1')}</span>
              </div>
              <div className='inputBox w100'>
                <input type='submit' value='Send' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </form>
  );
}

export default Contact;
