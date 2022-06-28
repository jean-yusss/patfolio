import * as S from './StatusBarStyles';

const StatusBar = () => (
	<S.StatusBarContainer>
		<S.LeftContainer>
			<S.IconTextContainer>
				<S.GitIcon />
				<S.StatusBarText>main</S.StatusBarText>
			</S.IconTextContainer>

			<S.IconTextContainer>
				<S.SyncIcon />
			</S.IconTextContainer>

			<S.Problems>
				<S.ErrorIcon />
				<S.StatusBarText>0</S.StatusBarText>
				<S.WarningIcon />
				<S.StatusBarText>0</S.StatusBarText>
			</S.Problems>
		</S.LeftContainer>

		<S.RightContainer>
			<S.LineColumn>
				<S.StatusBarText>Ln 1, Col 1</S.StatusBarText>
			</S.LineColumn>

			<S.Spaces>
				<S.StatusBarText>Spaces: 2</S.StatusBarText>
			</S.Spaces>

			<S.Encoding>
				<S.StatusBarText>UTF-8</S.StatusBarText>
			</S.Encoding>

			<S.EndOfLineSequence>
				<S.StatusBarText>LF</S.StatusBarText>
			</S.EndOfLineSequence>

			<S.IconTextContainer>
				<S.BracketsIcon />
				<S.StatusBarText>TypeScript React</S.StatusBarText>
			</S.IconTextContainer>

			<S.Prettier>
				<S.PrettierIcon />
				<S.StatusBarText>Prettier</S.StatusBarText>
			</S.Prettier>

			<S.IconTextContainer>
				<S.FeedbackIcon />
			</S.IconTextContainer>

			<S.IconTextContainer>
				<S.BellIcon />
			</S.IconTextContainer>
		</S.RightContainer>
	</S.StatusBarContainer>
);

export default StatusBar;
