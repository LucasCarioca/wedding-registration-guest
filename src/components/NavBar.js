import React, {useState} from 'react';
import {Button, Drawer, List, ListItem, ListItemText, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {homeLocalization} from './localization';
import LanguagePicker from './LanguagePicker';

function NavBar() {
  const [drawerState, setDrawerState] = useState(false);

  const links = [
    {url: '/#home', label: homeLocalization.homeTitle.toUpperCase()},
    {url: '/#our-story', label: homeLocalization.ourStoryTitle.toUpperCase()},
    {url: '/#the-wedding', label: homeLocalization.theWeddingTitle.toUpperCase()},
    {url: '/#gallery', label: homeLocalization.galleryTitle.toUpperCase()},
    {url: '/#contact', label: homeLocalization.contactTitle.toUpperCase()},
    {url: '/#registry', label: homeLocalization.registryTitle.toUpperCase()},
    {url: '/search', label: homeLocalization.invitationTitle.toUpperCase()},
  ];
  return (
    <>
      <div className={'nav-home'}>
        {links.map(({url, label}, i) => <a href={url} key={i}><Typography>{label}</Typography></a>)}
        <LanguagePicker/>
      </div>
      <div className={'mobile-nav'}>
        <Drawer
          anchor="left"
          open={drawerState}
          onClose={() => setDrawerState(!drawerState)}
        >
          <List sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '80vw'
          }}>
            <div onClick={() => setDrawerState(!drawerState)}>
              {links.map(({url, label}, i) => (<a className="styled-nav-link" href={url} key={i}>
                <ListItem>
                  <ListItemText>
                    {label}
                  </ListItemText>
                </ListItem>
              </a>))}
            </div>
          </List>
        </Drawer>
        <div style={{
          position: 'fixed',
          top: '0',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: 'white',
          zIndex: '100'
        }}>
          <Button style={{color: 'black'}} onClick={() => setDrawerState(!drawerState)} id="catalog">
            <MenuIcon/>
          </Button>
          <LanguagePicker/>
        </div>
      </div>
    </>
  );
}

export default NavBar;
