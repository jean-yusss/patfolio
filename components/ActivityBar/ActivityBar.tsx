import getIcon from '../../utils/getIcon';

import * as S from './ActivityBarStyles';

const ActivityBar = () => {
	return (
		<S.ActivityBarContainer>
			<S.TopSection>
				{getIcon('files')}
				{getIcon('mail')}
				{getIcon('code')}
			</S.TopSection>

			<S.BottomSection>
				{getIcon('account')}
				{getIcon('settings')}
			</S.BottomSection>
		</S.ActivityBarContainer>
	);
};

export default ActivityBar;
