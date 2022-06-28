import { useState } from 'react';

import Folder from '../Folder/Folder';

import * as S from './SideBarStyles';

const SideBar = () => {
	const [isOpen, setIsOpen] = useState<Boolean>(true);

	return (
		<S.SideBarContainer>
			<S.ExplorerContainer>
				<S.Explorer>EXPLORER</S.Explorer>
				<S.DotsIcon />
			</S.ExplorerContainer>

			<S.SectionHeaderContainer onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <S.ChevronDownIcon /> : <S.ChevronRightIcon />}
				<S.SectionHeaderTitle>PATFOLIO</S.SectionHeaderTitle>
			</S.SectionHeaderContainer>

			{isOpen && <Folder />}
		</S.SideBarContainer>
	);
};

export default SideBar;
