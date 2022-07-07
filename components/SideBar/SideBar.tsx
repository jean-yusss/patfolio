import { useState } from 'react';
import { useTheme } from 'next-themes';

import Folder from '../Folder/Folder';

import getIcon from '../../utils/getIcon';

import * as S from './SideBarStyles';

const SideBar = () => {
	const [isOpen, setIsOpen] = useState<Boolean>(true);
	const { theme } = useTheme();

	return (
		<S.SideBarContainer theme={theme}>
			<S.ExplorerContainer theme={theme}>
				<S.Explorer>EXPLORER</S.Explorer>
				{getIcon('ellipsis')}
			</S.ExplorerContainer>

			<S.SectionHeaderContainer onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? getIcon('chevronDown') : getIcon('chevronRight')}
				<S.SectionHeaderTitle>PATFOLIO</S.SectionHeaderTitle>
			</S.SectionHeaderContainer>

			{isOpen && <Folder />}
		</S.SideBarContainer>
	);
};

export default SideBar;
