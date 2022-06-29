import Link from 'next/link';
import getIcon from '../utils/getIcon';

import { FileContainer, FileText } from './FileStyles';

interface Props {
	file: string;
	icon: string;
	path: string;
}

const File = ({ file, icon, path }: Props) => (
	<Link href={path}>
		<FileContainer>
			{getIcon(icon)}
			<FileText>{file}</FileText>
		</FileContainer>
	</Link>
);

export default File;
