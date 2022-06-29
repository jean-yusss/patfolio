import * as S from './ActivityBarStyles';

const ActivityBar = () => (
	<S.ActivityBarContainer>
		<S.TopSection>
			<S.FilesIcon />
			<S.MailIcon />
			<S.CodeIcon />
		</S.TopSection>

		<S.BottomSection>
			<S.AccountIcon />
			<S.SettingsIcon />
		</S.BottomSection>
	</S.ActivityBarContainer>
);

export default ActivityBar;
