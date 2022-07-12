import { useTheme } from 'next-themes';

import * as S from './MediaStyles';

const Media = () => {
	const { theme } = useTheme();

	return (
		<S.MediaContainer>
			<S.MediaTitle theme={theme}>Reach Out Via Social Media</S.MediaTitle>

			<S.MainContainer>
				<S.LineContainer>
					<S.Line>1</S.Line>
					<S.Line>2</S.Line>
					<S.Line>3</S.Line>
					<S.Line>4</S.Line>
					<S.Line>5</S.Line>
					<S.Line>6</S.Line>
					<S.Line>7</S.Line>
				</S.LineContainer>

				<S.ClassContainer>
					<S.Class>
						<S.ClassName theme={theme}>.media</S.ClassName>
						<S.Brackets theme={theme}>{'{'}</S.Brackets>
					</S.Class>
					<S.Portfolio />
					<S.Email />
					<S.GitHub />
					<S.Instagram />
					<S.Brackets theme={theme}>{'}'}</S.Brackets>
				</S.ClassContainer>
			</S.MainContainer>
		</S.MediaContainer>
	);
};

export default Media;
