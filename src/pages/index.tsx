import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<section>
				<div className="container mx-auto px-6">
					<h1>home page</h1>
				</div>
			</section>
		</>
	)
}
