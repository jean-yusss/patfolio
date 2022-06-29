import Link from 'next/link';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { IconContainer } from './ActivityBarIconStyles';

interface Props {
	path: string;
	icon: string;
}

const ActivityBarIcon = ({ path, icon }: Props) => {
	const router = useRouter();

	return (
		<Link href={path}>
			<IconContainer path={path} router={router.pathname}>
				{getIcon(icon)}
			</IconContainer>
		</Link>
	);
};

export default ActivityBarIcon;
