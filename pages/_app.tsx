import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
  <Head>
    <title>MyTop - наш лучший топ</title>
    <link ref="icon" href="/favicon.ico"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
  </Head>
  <Component {...pageProps} />
  </>;
}

export default MyApp;
