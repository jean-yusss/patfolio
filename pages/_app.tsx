import type { AppProps } from 'next/app';

import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
};

export default App;
