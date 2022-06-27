import Head from 'next/head';
import TitleBar from '../components/TitleBar/TitleBar';

const Home = () => {
	return (
		<div className='h-screen w-screen overflow-hidden'>
			<Head>
				<title>Patfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<TitleBar />
		</div>
	);
};

export default Home;
