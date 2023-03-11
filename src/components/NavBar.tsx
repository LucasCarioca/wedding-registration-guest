import React, { useState } from 'react';
import { Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguagePicker from './LanguagePicker';
import { styledComponent } from '../utility/styledComponent';
import { useDict } from '../lang';
import { useRouter } from 'next/router';
import Link from 'next/link';



function NavBar({ styles }: styledComponent) {
    const { locale } = useRouter();
    const dict = useDict(locale)
    const [drawerState, setDrawerState] = useState(false);

    const links = [
        { url: '/#home', label: dict.homeTitle.toUpperCase() },
        { url: '/#the-wedding', label: dict.theWeddingTitle.toUpperCase() },
        { url: '/#events', label: dict.eventsTitle.toUpperCase() },
        { url: '/#travel', label: dict.theWeddingTitle.toUpperCase() },
        { url: '/#our-story', label: dict.ourStoryTitle.toUpperCase() },
        { url: 'https://www.zola.com/registry/lucasandkaren2023', label: dict.registryTitle.toUpperCase() },
        { url: '/faq', label: dict.faqTitle.toUpperCase() },
        { url: '/invitations', label: dict.invitationTitle.toUpperCase() },
    ];

    return (
        <>
            <div className={styles['nav-home']}>
                {links.map(({ url, label }, i) => <a href={url} key={i}><Typography>{label}</Typography></a>)}
                <LanguagePicker />
            </div>
            <div className={styles['mobile-nav']}>
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
                            {links.map(({ url, label }, i) => (<Link className={styles['styled-nav-link']} href={url} key={i} locale={locale}>
                                <ListItem>
                                    <ListItemText>
                                        {label}
                                    </ListItemText>
                                </ListItem>
                            </Link>))}
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
                    <Button style={{ color: 'black' }} onClick={() => setDrawerState(!drawerState)} id="catalog">
                        <MenuIcon />
                    </Button>
                    <LanguagePicker />
                </div>
            </div>
        </>
    );
}

export default NavBar;
