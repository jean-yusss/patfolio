import Link from 'next/link';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { IconContainer } from './ActivityBarIconStyles';

const ActivityBarIcon = ({ path, icon }: ActivityBarIconProps) => {
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
