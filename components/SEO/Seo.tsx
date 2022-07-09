import Head from 'next/head';

const Seo = ({ title }: SEOProps) => (
	<Head>
		<title>{title}</title>
		<meta
			name='description'
			content='A portfolio website inspired by the source-code editor: Visual Studio Code for macOS created by Patrick Nguyen'
		/>
		<meta
			name='keywords'
			content='patrick nguyen, patrick nguyen portfolio, patfolio, visual studio code portfolio, vscode portfolio, web developer portfolio'
		/>
		<meta property='og:title' content="Patrick Nguyen's Portfolio Website" />
		<meta
			property='og:description'
			content='A portfolio website inspired by the source-code editor: Visual Studio Code for macOS created by Patrick Nguyen'
		/>
		<meta property='og:url' content='https://patfolio.vercel.app/' />
		<link rel='icon' href='/favicon.ico' />
	</Head>
);

export default Seo;
