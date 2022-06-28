import * as S from './FolderStyles';

const Folder = () => {
	return (
		<S.FolderContainer>
			<S.FileContainer>
				<S.ReactIcon />
				<S.FileText>Home.tsx</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				<S.HTMLIcon />
				<S.FileText>About.html</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				<S.CSSIcon />
				<S.FileText>Contact.css</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				<S.JavaScriptIcon />
				<S.FileText>Projects.js</S.FileText>
			</S.FileContainer>

			<S.FileContainer>
				<S.JsonIcon />
				<S.FileText>Settings.json</S.FileText>
			</S.FileContainer>
		</S.FolderContainer>
	);
};

export default Folder;
