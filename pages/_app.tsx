import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Head } from 'next/document'
import Navigation from '../components/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
