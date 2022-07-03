import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import Layout from '../components/Layout/Layout';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Toaster />
		<GlobalStyles />
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);

export default App;
