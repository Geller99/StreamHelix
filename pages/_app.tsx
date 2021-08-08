import '../styles/globals.css';
import '../styles/layouts.css';
import '../styles/layouts.desktop.css';
// export const logoHelix = require('../utilities/Logo.png');


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
