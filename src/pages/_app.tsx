import Context from '@/components/useTranslate'
import eng from '../../public/languages/eng/eng'
import ru from '../../public/languages/ru/ru'
import uz from '../../public/languages/uzb/uz'
import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { createContext } from 'react'
import axios from 'axios'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
    const { locale } = router;
	const translation = locale === "uz" ? uz : locale === "ru" ? ru : eng;
	return (
		<Context.Provider value={ translation }>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</Context.Provider>
	)
}

