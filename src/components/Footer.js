import React from 'react';
import {setLanguages} from './localization';

const Footer = () => {
  const setLanguage = (language) => {
    localStorage.setItem('language', language);
    setLanguages(language);
    window.location.reload();
  };
  const year = new Date().getFullYear();
  return (<section className={'footer'}>
    <p className={'footer--attribution'}>Copyright &copy; Lucas De Souza {year}</p>
    <p className={'footer--languages'}>
      <span onClick={() => setLanguage('en')}> 🇺🇸 </span>
      <span onClick={() => setLanguage('es')}> 🇨🇴 </span>
      <span onClick={() => setLanguage('br')}> 🇧🇷 </span>
    </p>
  </section>);
};

export default Footer;
