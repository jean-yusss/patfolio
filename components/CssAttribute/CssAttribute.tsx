import * as S from './CssAttributeStyles';

interface Props {
	property: string;
	value: string;
	// Adding routing later
	link?: string;
}

const CssAttribute = ({ property, value, link }: Props) => {
	return (
		<S.CssAttributeContainer>
			<S.Key>{property}</S.Key>
			<S.Colon>:</S.Colon>
			<S.Value>{value}</S.Value>
			<S.SemiColon>{';'}</S.SemiColon>
		</S.CssAttributeContainer>
	);
};

export default CssAttribute;
