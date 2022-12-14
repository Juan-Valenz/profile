import '../assets/styles/global.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { ModalContextProvider } from '@rintsin/common-components';
import { ThemeProvider } from '../components/ThemeHook';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  </ThemeProvider>
)

export default MyApp
