import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<div>
			<Head>
				<title>MyTop</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</div>
	)
}
