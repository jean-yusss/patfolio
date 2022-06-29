import getIcon from '../../utils/getIcon';

import * as S from './TitleBarStyles';

const TitleBar = () => (
	<S.TitleBarContainer>
		<S.WindowButtons>
			<S.CloseButton>{getIcon('close')}</S.CloseButton>
			<S.MinimizeButton>{getIcon('minimize')}</S.MinimizeButton>
			<S.MaximizeButton>{getIcon('maximize')}</S.MaximizeButton>
		</S.WindowButtons>

		<S.TitleBarTitle>Patrick Nguyen</S.TitleBarTitle>
	</S.TitleBarContainer>
);

export default TitleBar;
