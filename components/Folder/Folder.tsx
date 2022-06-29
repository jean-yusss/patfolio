import getIcon from '../../utils/getIcon';

import * as S from './FolderStyles';

const Folder = () => {
	return (
		<S.FolderContainer>
			<S.FileContainer>
				{getIcon('react')}
				<S.FileText>Home.tsx</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				{getIcon('html')}
				<S.FileText>About.html</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				{getIcon('css')}
				<S.FileText>Contact.css</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				{getIcon('javaScript')}
				<S.FileText>Projects.js</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				{getIcon('json')}
				<S.FileText>Settings.json</S.FileText>
			</S.FileContainer>
		</S.FolderContainer>
	);
};

export default Folder;
