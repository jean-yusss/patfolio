import Link from 'next/link';
import { useRouter } from 'next/router';

import getIcon from '../../utils/getIcon';

import { FileContainer, FileText } from './FileStyles';

const File = ({ file, icon, path }: FileProps) => {
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
