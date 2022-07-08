import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { IconContainer } from './ActivityBarIconStyles';

const ActivityBarIcon = ({ path, icon }: ActivityBarIconProps) => {
	const router = useRouter();
	const { theme } = useTheme();

	return (
		<Link href={path}>
			<IconContainer path={path} router={router.pathname} theme={theme}>
				{getIcon(icon)}
			</IconContainer>
		</Link>
	);
};

export default ActivityBarIcon;
