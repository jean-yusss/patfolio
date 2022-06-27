import Head from 'next/head';

const Home = () => {
	return (
		<div className='h-screen w-screen overflow-hidden'>
			<Head>
				<title>Patfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='h-6 w-full text-center'>
				<h1>Patfolio</h1>
			</main>
		</div>
	);
};

export default Home;
