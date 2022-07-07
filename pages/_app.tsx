import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

import Layout from '../components/Layout/Layout';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider
		defaultTheme='Dracula Official'
		themes={['Dracula Official', 'GitHub Dark Dimmed']}
	>
		<Toaster />
		<GlobalStyles />
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
);

export default App;
