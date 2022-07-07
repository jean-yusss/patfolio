import Image from 'next/image';

import getIcon from '../../utils/getIcon';

import * as S from './ThemeCardStyles';

const ThemeCard = ({ theme }: ThemeCardProps) => {
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

			<S.SetThemeButton>Set Color Theme</S.SetThemeButton>
		</S.ThemeCardContainer>
	);
};

export default ThemeCard;
