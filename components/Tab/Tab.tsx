import Link from 'next/link';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { TabContainer, TabText } from './TabStyles';

const Tab = ({ path, icon, tab }: TabProps) => {
	const router = useRouter();

	return (
		<Link href={path}>
			<TabContainer path={path} router={router.pathname}>
				{getIcon(icon)}
				<TabText>{tab}</TabText>
			</TabContainer>
		</Link>
	);
};

export default Tab;
