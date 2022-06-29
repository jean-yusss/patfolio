import type { AppProps } from 'next/app';

import Layout from '../components/Layout/Layout';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
