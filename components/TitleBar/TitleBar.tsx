import * as S from './TitleBarStyles';

const TitleBar = () => (
	<S.TitleBarContainer>
		<S.WindowButtons>
			<S.CloseButton>
				<S.CloseIcon />
			</S.CloseButton>

			<S.MinimizeButton>
				<S.MinimizeIcon />
			</S.MinimizeButton>

			<S.MaximizeButton>
				<S.MaximizeIcon />
			</S.MaximizeButton>
		</S.WindowButtons>

		<S.TitleBarTitle>Patrick Nguyen</S.TitleBarTitle>
	</S.TitleBarContainer>
);

export default TitleBar;
