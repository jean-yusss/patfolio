import Link from 'next/link';
import { useRouter } from 'next/router';
import getIcon from '../../utils/getIcon';
import { TabContainer, TabText } from './TabStyles';

interface Props {
	icon: string;
	tab: string;
	path: string;
}

const Tab = ({ path, icon, tab }: Props) => {
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
