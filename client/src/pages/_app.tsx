import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/design_tokens.css';
import '../styles/theme_light.css';
import '../styles/theme_dark.css';
import GlobalStyles from '../components/_GlobalStyles/GlobalStyles';
import Header from '../components/_Header/Header';
import Footer from '../components/_Footer/Footer';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="theme-color" content="#F2F2F2" media="(prefers-color-scheme: light)" />
				<meta name="theme-color" content="#262626" media="(prefers-color-scheme: dark)" />
			</Head>
			<GlobalStyles />
			<header id="header" className="header">
				<Header />
			</header>
			<main id="main" className="main">
				<Component {...pageProps} />
			</main>
			<footer id="footer" className="footer">
				<Footer />
			</footer>
		</>
	);
};

export default App;
