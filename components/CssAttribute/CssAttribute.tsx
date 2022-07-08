import { useTheme } from 'next-themes';
import * as S from './CssAttributeStyles';

const CssAttribute = ({ property, value, href }: CssAttributeProps) => {
	const { theme } = useTheme();

	return (
		<S.CssAttributeContainer>
			<S.Key>{property}</S.Key>
			<S.Colon>:</S.Colon>
			<S.Value href={href} theme={theme}>
				{value}
			</S.Value>
			<S.SemiColon>{';'}</S.SemiColon>
		</S.CssAttributeContainer>
	);
};

export default CssAttribute;
