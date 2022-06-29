import Link from 'next/link';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { FileContainer, FileText } from './FileStyles';

interface Props {
	file: string;
	icon: string;
	path: string;
}

const File = ({ file, icon, path }: Props) => {
	const router = useRouter();

	return (
		<Link href={path}>
			<FileContainer path={path} router={router.pathname}>
				{getIcon(icon)}
				<FileText>{file}</FileText>
			</FileContainer>
		</Link>
	);
};

export default File;
