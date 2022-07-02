import * as S from './MediaStyles';

const Media = () => (
	<S.MediaContainer>
		<S.MediaTitle>Reach Out Via Social Media</S.MediaTitle>

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
					<S.ClassName>.media</S.ClassName>
					<S.Brackets>{'{'}</S.Brackets>
				</S.Class>
				<S.Portfolio />
				<S.Email />
				<S.GitHub />
				<S.Instagram />
				<S.Brackets>{'}'}</S.Brackets>
			</S.ClassContainer>
		</S.MainContainer>
	</S.MediaContainer>
);

export default Media;
