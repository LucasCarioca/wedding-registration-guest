import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';

function InvitationNavBar({registraion}) {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => setDrawerState(!drawerState)}
      >
        <List sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div onClick={() => setDrawerState(!drawerState)}>
            <Link className="styled-nav-link" to={`/`}>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
            <Divider/>
            <Link className="styled-nav-link" to={`/invitations/${registraion.registration_key}`}>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText>
                  Invitation Home
                </ListItemText>
              </ListItem>
            </Link>
            <Link className="styled-nav-link" to={`/invitations/${registraion.registration_key}/guests`}>
              <ListItem>
                <ListItemIcon>
                  <AppsIcon/>
                </ListItemIcon>
                <ListItemText>
                  RSVP
                </ListItemText>
              </ListItem>
            </Link>
          </div>
        </List>
      </Drawer>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
              <div>
                <Button onClick={() => setDrawerState(!drawerState)} id="catalog">
                  <MenuIcon/>
                </Button>
              </div>
              <div>
                <Link className="styled-nav-link" to={`/invitations/${registraion.registration_key}`}>
                  <Button id="catalog">
                    Karen and Lucas&apos;s Wedding
                  </Button>
                </Link>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default InvitationNavBar;
