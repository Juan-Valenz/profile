import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header></header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  )
}

export default MyApp
