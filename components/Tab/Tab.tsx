import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { TabContainer, TabText } from './TabStyles';

const Tab = ({ path, icon, tab }: TabProps) => {
	const router = useRouter();
	const { theme } = useTheme();

	return (
		<Link href={path}>
			<TabContainer path={path} router={router.pathname} theme={theme}>
				{getIcon(icon)}
				<TabText>{tab}</TabText>
			</TabContainer>
		</Link>
	);
};

export default Tab;
