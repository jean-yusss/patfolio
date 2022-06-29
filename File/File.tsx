import getIcon from '../utils/getIcon';

import { FileContainer, FileText } from './FileStyles';

interface Props {
	file: string;
	icon: string;
}

const File = ({ file, icon }: Props) => (
	<FileContainer>
		{getIcon(icon)}
		<FileText>{file}</FileText>
	</FileContainer>
);

export default File;
