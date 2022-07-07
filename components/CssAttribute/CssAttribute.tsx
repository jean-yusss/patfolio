import * as S from './CssAttributeStyles';

const CssAttribute = ({ property, value, href }: CssAttributeProps) => (
	<S.CssAttributeContainer>
		<S.Key>{property}</S.Key>
		<S.Colon>:</S.Colon>
		<S.Value href={href}>{value}</S.Value>
		<S.SemiColon>{';'}</S.SemiColon>
	</S.CssAttributeContainer>
);

export default CssAttribute;
