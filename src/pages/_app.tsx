import { AppProps } from 'next/app';
import '../../public/assets/css/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
