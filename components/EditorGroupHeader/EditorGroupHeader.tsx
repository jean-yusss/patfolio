import * as S from './EditorGroupHeaderStyles';

const EditorGroupHeader = () => (
	<S.EditorGroupHeaderContainer>
		<S.HomeTab />
		<S.AboutTab />
		<S.ContactTab />
		<S.ProjectsTab />
		<S.SettingsTab />
		<S.LastTab />
	</S.EditorGroupHeaderContainer>
);

export default EditorGroupHeader;
