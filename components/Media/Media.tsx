import { useTheme } from 'next-themes';

import * as S from './MediaStyles';

const Media = () => {
	const { theme } = useTheme();

	return (
		<S.MediaContainer>
			<S.MediaTitle theme={theme}>Reach Out Via Social Media</S.MediaTitle>

			<S.MainContainer>
				<S.LineContainer>
					{[...Array(7)].map((e, i) => (
						<S.Line key={e}>{i + 1}</S.Line>
					))}
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
