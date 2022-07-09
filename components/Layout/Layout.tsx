import ActivityBar from '../ActivityBar/ActivityBar';
import EditorGroupHeader from '../EditorGroupHeader/EditorGroupHeader';
import SideBar from '../SideBar/SideBar';
import StatusBar from '../StatusBar/StatusBar';
import TitleBar from '../TitleBar/TitleBar';

import * as S from './LayoutStyles';

const Layout = ({ children }: LayoutProps) => (
	<S.LayoutContainer>
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
