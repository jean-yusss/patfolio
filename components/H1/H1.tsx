import * as S from './H1Styles';

const H1 = ({ title }: H1Props) => (
	<S.H1Container>
		<S.TagContainer>
			<S.TagBrackets>{'<'}</S.TagBrackets>
			<S.Tag>h1</S.Tag>
			<S.TagBrackets>{'>'}</S.TagBrackets>
		</S.TagContainer>

		<S.Title>{title}</S.Title>

		<S.TagContainer>
			<S.TagBrackets>{'</'}</S.TagBrackets>
			<S.Tag>h1</S.Tag>
			<S.TagBrackets>{'>'}</S.TagBrackets>
		</S.TagContainer>
	</S.H1Container>
);

export default H1;
