import React from 'react';
import {Typography} from '@mui/material';
import LanguagePicker from './LanguagePicker';

const Footer = () => {
  const year = new Date().getFullYear();
  return (<section className={'footer'}>
    <Typography className={'footer--attribution'}>Copyright &copy; Lucas De Souza {year}</Typography>
    <Typography className={'footer--attribution'} style={{fontSize: '.75rem'}}>Anter Font made from <a href="http://www.onlinewebfonts.com">Online Web Fonts</a> is licensed by CC BY 3.0</Typography>
    <Typography className={'footer--languages'}>
      <LanguagePicker/>
    </Typography>
  </section>);
};

export default Footer;
