import React, {useState} from 'react';
import {Button, Drawer, List, ListItem, ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className={'mobile-nav'}>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => setDrawerState(!drawerState)}
      >
        <List sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '80vw'}}>
          <div onClick={() => setDrawerState(!drawerState)}>
            <a className="styled-nav-link" href={'#home'}>
              <ListItem>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </a>
            <a className="styled-nav-link" href={'#our-story'}>
              <ListItem>
                <ListItemText>
                  Our Story
                </ListItemText>
              </ListItem>
            </a>
            <a className="styled-nav-link" href={'#the-wedding'}>
              <ListItem>
                <ListItemText>
                  The Wedding
                </ListItemText>
              </ListItem>
            </a>
            <a className="styled-nav-link" href={'#gallery'}>
              <ListItem>
                <ListItemText>
                  Gallery
                </ListItemText>
              </ListItem>
            </a>
            <a className="styled-nav-link" href={'#contact'}>
              <ListItem>
                <ListItemText>
                  Contact
                </ListItemText>
              </ListItem>
            </a>
            <a className="styled-nav-link" href={'#registry'}>
              <ListItem>
                <ListItemText>
                  Registry
                </ListItemText>
              </ListItem>
            </a>
          </div>
        </List>
      </Drawer>
      <div style={{
        position: 'fixed',
        top: '0',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: 'white'
      }}>
        <Button style={{color: 'black'}} onClick={() => setDrawerState(!drawerState)} id="catalog">
          <MenuIcon/>
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
