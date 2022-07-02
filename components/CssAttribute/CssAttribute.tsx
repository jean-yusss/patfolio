import * as S from './CssAttributeStyles';

interface Props {
	property: string;
	value: string;
	href: string;
}

const CssAttribute = ({ property, value, href }: Props) => (
	<S.CssAttributeContainer>
		<S.Key>{property}</S.Key>
		<S.Colon>:</S.Colon>
		<S.Value href={href}>{value}</S.Value>
		<S.SemiColon>{';'}</S.SemiColon>
	</S.CssAttributeContainer>
);

export default CssAttribute;
