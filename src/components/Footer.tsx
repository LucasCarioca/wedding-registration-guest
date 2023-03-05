import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import { getAppInfo } from '../../config'
import LanguagePicker from './LanguagePicker';
import { styledComponent } from '../utility/styledComponent';

export default function Footer({ styles }: styledComponent) {
    const [year, setYear] = useState('')
    const [version, setVersion] = useState('')
    const [changelog, setChangelog] = useState('')
    useEffect(() => {
        setYear(`${new Date().getFullYear()}`)
        setVersion(`v${getAppInfo().version}`)
        setChangelog(`https://github.com/LucasCarioca/wedding-registration-guest/releases/tag/${version}`)
    }, [version])
    return (<section className={styles.footer} >
        <Typography className={styles.attribution}> Copyright &copy; Lucas De Souza {year} </Typography>
        <Typography className={styles.attribution}> <a href={changelog}> {version} </a></Typography>
        <Typography className={styles.attribution} style={{ fontSize: '.75rem' }
        }> Anter Font made from <a href="http://www.onlinewebfonts.com" > &quot;Online Web Fonts&quot; </a> is licensed by CC BY 3.0</Typography>
        <Typography className={styles.languages}>
            <LanguagePicker />
        </Typography>
    </section>)
}