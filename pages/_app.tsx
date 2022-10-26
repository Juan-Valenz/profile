import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Head } from 'next/document'
import Navigation from '../components/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header> <Navigation /></header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  )
}

export default MyApp
