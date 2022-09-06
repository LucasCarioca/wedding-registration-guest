import React from 'react';
import {Typography} from '@mui/material';
import LanguagePicker from './LanguagePicker';

const Footer = () => {
  const year = new Date().getFullYear();
  return (<section className={'footer'}>
    <Typography className={'footer--attribution'}>Copyright &copy; Lucas De Souza {year}-</Typography>
    <Typography className={'footer--languages'}>
      <LanguagePicker/>
    </Typography>
  </section>);
};

export default Footer;
