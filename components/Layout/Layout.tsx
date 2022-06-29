import Head from 'next/head';

import ActivityBar from '../ActivityBar/ActivityBar';
import EditorGroupHeader from '../EditorGroupHeader/EditorGroupHeader';
import SideBar from '../SideBar/SideBar';
import StatusBar from '../StatusBar/StatusBar';
import TitleBar from '../TitleBar/TitleBar';

import * as S from './LayoutStyles';

interface Props {
	children: JSX.Element;
}

const Layout = ({ children }: Props) => (
	<S.LayoutContainer>
		<Head>
			<title>Patfolio</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<TitleBar />

		<S.MainContainer>
			<ActivityBar />
			<SideBar />

			<S.EditorContainer>
				<EditorGroupHeader />
				{children}
			</S.EditorContainer>
		</S.MainContainer>

		<StatusBar />
	</S.LayoutContainer>
);

export default Layout;
