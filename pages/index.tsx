import Head from 'next/head';
import ActivityBar from '../components/ActivityBar/ActivityBar';
import SideBar from '../components/SideBar/SideBar';
import StatusBar from '../components/StatusBar/StatusBar';
import TitleBar from '../components/TitleBar/TitleBar';

import * as S from '../styles/HomeStyles';

const Home = () => {
	return (
		<S.HomeContainer>
			<Head>
				<title>Patfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<TitleBar />

			<S.MainContainer>
				<ActivityBar />
				<SideBar />
			</S.MainContainer>

			<StatusBar />
		</S.HomeContainer>
	);
};

export default Home;
