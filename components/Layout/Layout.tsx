import Head from 'next/head';

import ActivityBar from '../ActivityBar/ActivityBar';
import EditorGroupHeader from '../EditorGroupHeader/EditorGroupHeader';
import SideBar from '../SideBar/SideBar';
import StatusBar from '../StatusBar/StatusBar';
import TitleBar from '../TitleBar/TitleBar';

import * as S from './LayoutStyles';

const Layout = ({ children }: LayoutProps) => (
	<S.LayoutContainer>
		<Head>
			<title>{`Patrick Nguyen | ${children.type.name}`}</title>
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
