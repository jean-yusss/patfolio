import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import Seo from '../components/SEO/Seo';
import Layout from '../components/Layout/Layout';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	const [mounted, setMounted] = useState(false);

	// Avoid Hydration Mismatch.
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ThemeProvider
			defaultTheme='Dracula Official'
			themes={[
				'Dracula Official',
				'GitHub Dark Dimmed',
				'Winter Is Coming',
				"SynthWave '84",
				'Nord',
				'Shades Of Purple',
				'Vue Theme',
				'Tokyo Night Storm'
			]}
		>
			<Toaster />
			<GlobalStyles />
			<Layout>
				<Seo title={`Patrick Nguyen | ${pageProps.title}`} />
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
