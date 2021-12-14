import React, { useEffect} from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import { Container } from '@material-ui/core';
import { WebRtcProvider, reducer } from 'kidsloop-live-state/ui';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';

const store = createStore(reducer);

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Kidsloop Test PoC</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store} >
        <WebRtcProvider selector={s=>s as any} getSfuUrl={() => new URL('ws://localhost:8080/')} >
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container maxWidth="lg">
                  <Component {...pageProps} />
              </Container>
          </ThemeProvider>
        </WebRtcProvider >
      </Provider>
    </>
  );
}

export default App;