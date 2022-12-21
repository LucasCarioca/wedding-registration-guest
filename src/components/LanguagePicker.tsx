import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const languages = [
    { name: 'en', icon: '🇺🇸' },
    { name: 'es', icon: '🇨🇴' },
    { name: 'br', icon: '🇧🇷' },
];

export default function LanguagePicker() {
    const { locale, pathname } = useRouter()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
        <Button
            id="language-button"
            aria-controls={open ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <Typography style={{ fontSize: '20px' }}>{languages.find(l => locale === l.name)?.icon}</Typography>
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
            {languages.map(l => <MenuItem key={l.name}>
                <Link href={pathname} locale={l.name}>
                    <Typography style={{ fontSize: '25px' }}>{l.icon}</Typography>
                </Link>
            </MenuItem>)}
        </Menu>
    </>);
}