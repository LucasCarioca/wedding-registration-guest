import React from 'react';
import {setLanguages} from './localization';
import {Typography} from '@mui/material';

const Footer = () => {
  const setLanguage = (language) => {
    localStorage.setItem('language', language);
    setLanguages(language);
    window.location.reload();
  };
  const year = new Date().getFullYear();
  return (<section className={'footer'}>
    <Typography className={'footer--attribution'}>Copyright &copy; Lucas De Souza {year}</Typography>
    <Typography className={'footer--languages'}>
      <span onClick={() => setLanguage('en')}> 🇺🇸 </span>
      <span onClick={() => setLanguage('es')}> 🇨🇴 </span>
      <span onClick={() => setLanguage('br')}> 🇧🇷 </span>
    </Typography>
  </section>);
};

export default Footer;
