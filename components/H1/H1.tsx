import { useTheme } from 'next-themes';
import * as S from './H1Styles';

const H1 = ({ title }: H1Props) => {
	const { theme } = useTheme();

	return (
		<S.H1Container>
			<S.TagContainer>
				<S.TagBrackets theme={theme}>{'<'}</S.TagBrackets>
				<S.Tag theme={theme}>h1</S.Tag>
				<S.TagBrackets theme={theme}>{'>'}</S.TagBrackets>
			</S.TagContainer>

			<S.Title>{title}</S.Title>

			<S.TagContainer>
				<S.TagBrackets theme={theme}>{'</'}</S.TagBrackets>
				<S.Tag theme={theme}>h1</S.Tag>
				<S.TagBrackets theme={theme}>{'>'}</S.TagBrackets>
			</S.TagContainer>
		</S.H1Container>
	);
};

export default H1;
