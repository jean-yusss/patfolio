import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';

import ThemeCard from '../components/ThemeCard/ThemeCard';

import { getThemes } from './api/themes';

import * as S from '../styles/SettingsStyles';

const Settings = ({ themes }: SettingsProps) => {
	const { theme } = useTheme();

	return (
		<S.SettingsContainer theme={theme}>
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
		props: {
			themes,
			title: 'Settings'
		}
	};
};

export default Settings;
