import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    appId="M04uUlKpY2yVzUKXp4b6oibv6PAlucfZRjeMkW15"
    serverUrl="https://ue2mi3ur5dch.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
