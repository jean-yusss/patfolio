import { GetStaticProps } from 'next';
import ThemeCard from '../components/ThemeCard/ThemeCard';

import { getThemes } from './api/themes';

import * as S from '../styles/SettingsStyles';

const Settings = ({ themes }: SettingsProps) => {
	return (
		<S.SettingsContainer>
			<S.SettingsTitle>Change Themes</S.SettingsTitle>

			<S.Themes>
				{themes.map(theme => (
					<ThemeCard key={theme.id} theme={theme} />
				))}
			</S.Themes>
		</S.SettingsContainer>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const themes = getThemes();

	return {
		props: { themes }
	};
};

export default Settings;
