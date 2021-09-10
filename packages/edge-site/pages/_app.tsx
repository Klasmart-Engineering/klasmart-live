import React, { useEffect} from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Kidsloop Test PoC</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store = {store}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
        </Provider>

      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;