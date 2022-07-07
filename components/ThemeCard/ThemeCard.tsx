import Image from 'next/image';
import { useTheme } from 'next-themes';

import getIcon from '../../utils/getIcon';

import * as S from './ThemeCardStyles';

const ThemeCard = ({ theme }: ThemeCardProps) => {
	const { setTheme } = useTheme();

	return (
		<S.ThemeCardContainer>
			<S.ImageContainer>
				<Image src={theme.image} alt='' layout='fill' />
			</S.ImageContainer>

			<S.ThemeName>{theme.theme}</S.ThemeName>

			<S.ThemeDevelopersCntainer>
				{getIcon('verified')}
				<S.ThemeDevelopers>{theme.developers}</S.ThemeDevelopers>
			</S.ThemeDevelopersCntainer>

			<S.SetThemeButton onClick={() => setTheme(theme.theme)}>
				Set Color Theme
			</S.SetThemeButton>
		</S.ThemeCardContainer>
	);
};

export default ThemeCard;
