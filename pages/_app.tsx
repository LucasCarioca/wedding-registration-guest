import '../styles/globals.css'
import type { AppProps } from 'next/app'
import footerStyle from '../styles/Footer.module.css'
import navBarStyle from '../styles/NavBar.module.css'
import Footer from '../src/components/Footer'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import lightTheme from '../styles/theme/lightTheme'
import { CssBaseline } from '@mui/material'
import createEmotionCache from '../src/utility/createEmotionCache'
import NavBar from '../src/components/NavBar'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (<CacheProvider value={emotionCache}>
    <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <NavBar styles={navBarStyle} />
        <Component {...pageProps} />
        <Footer styles={footerStyle} />
    </ThemeProvider>
  </CacheProvider>)
}
