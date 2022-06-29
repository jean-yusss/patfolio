import getIcon from '../../utils/getIcon';

import * as S from './StatusBarStyles';

const StatusBar = () => (
	<S.StatusBarContainer>
		<S.LeftContainer>
			<S.IconTextContainer>
				{getIcon('sourceControl')}
				<S.StatusBarText>main</S.StatusBarText>
			</S.IconTextContainer>

			<S.IconTextContainer>{getIcon('sync')}</S.IconTextContainer>

			<S.Problems>
				{getIcon('error')}
				<S.StatusBarText>0</S.StatusBarText>
				{getIcon('warning')}
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
				{getIcon('brackets')}
				<S.StatusBarText>TypeScript React</S.StatusBarText>
			</S.IconTextContainer>

			<S.Prettier>
				{getIcon('prettier')}
				<S.StatusBarText>Prettier</S.StatusBarText>
			</S.Prettier>

			<S.IconTextContainer>{getIcon('feedback')}</S.IconTextContainer>
			<S.IconTextContainer>{getIcon('bell')}</S.IconTextContainer>
		</S.RightContainer>
	</S.StatusBarContainer>
);

export default StatusBar;
