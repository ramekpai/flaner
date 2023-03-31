import { Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import '../styles/design_tokens.css';
import type { AppProps } from 'next/app';
import Header from '../components/_Header/Header';
import Footer from '../components/_Footer/Footer';

const openSans = Open_Sans({ subsets: ['cyrillic'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Header />
      <main id="main" className="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
