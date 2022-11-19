import React, {useState} from 'react';
import {getLanguage, setLanguages} from './localization';
import {Button, Menu, MenuItem, Typography} from '@mui/material';

const languages = [
  {name: 'en', icon: '🇺🇸'},
  {name: 'es', icon: '🇨🇴'},
  {name: 'br', icon: '🇧🇷'},
];

function LanguagePicker() {
  const language = getLanguage() || 'en';
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const setLanguage = (language) => {
    localStorage.setItem('language', language);
    setLanguages(language);
    window.location.reload();
  };

  return (<>
    <Button
      id="language-button"
      aria-controls={open ? 'language-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <Typography style={{fontSize: '20px'}}>{languages.find(l => language === l.name).icon}</Typography>
    </Button>
    <Menu
      id="language-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'language-button',
      }}
    >
      {languages.map(l => <MenuItem key={l.name} onClick={() => setLanguage(l.name)}>
        <Typography style={{fontSize: '25px'}}>{l.icon}</Typography>
      </MenuItem>)}
    </Menu>
  </>);
}

export default LanguagePicker;
