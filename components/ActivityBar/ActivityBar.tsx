import Link from 'next/link';
import getIcon from '../../utils/getIcon';

import * as S from './ActivityBarStyles';

const ActivityBar = () => {
	return (
		<S.ActivityBarContainer>
			<S.TopSection>
				<Link href='/'>{getIcon('files')}</Link>
				<Link href='/contact'>{getIcon('mail')}</Link>
				<Link href='/projects'>{getIcon('code')}</Link>
			</S.TopSection>

			<S.BottomSection>
				<Link href='/about'>{getIcon('account')}</Link>
				<Link href='/settings'>{getIcon('settings')}</Link>
			</S.BottomSection>
		</S.ActivityBarContainer>
	);
};

export default ActivityBar;
