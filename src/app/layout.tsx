import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Space_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import SocialHandles from '@/components/social-handles'
import Footer from '@/components/footer'
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
	title: 'Mani Naik',
	description: "Mani Naik's portfolio",
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const roboto_mono = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-mono',
	weight: '400',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<GoogleAnalytics gaId="GTM-MMMRMN8P" />
			<body className={`${inter.variable} ${roboto_mono.variable}`}>
				<Nav />
				<SocialHandles className="hidden md:block" />
				<main className="md:px-32 px-5 font-sans">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
