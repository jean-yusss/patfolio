import styled, { css } from 'styled-components';
import { VscChevronDown, VscChevronRight, VscEllipsis } from 'react-icons/vsc';

export const SideBarContainer = styled.div`
	height: 100%;
	width: 15rem;
	background-color: var(--sideBar-background);
	color: var(--sideBar-foreground);
	font-size: 0.75rem;
	line-height: 1rem;
`;

export const ExplorerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1.5rem;
`;

export const Explorer = styled.p`
	font-weight: 300;
`;

const SideBarIcons = css`
	height: 1rem;
	width: 1rem;
`;

export const DotsIcon = styled(VscEllipsis)`
	${SideBarIcons};
	border-radius: 0.125rem;
	cursor: pointer;

	&:hover {
		background-color: var(--list-hoverBackground);
	}
`;

export const SectionHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0.25rem 0;
	cursor: pointer;
	background-color: var(--sideBarSectionHeader-background);

	& > * {
		margin-left: 0.25rem;
	}
`;

export const ChevronDownIcon = styled(VscChevronDown)`
	${SideBarIcons};
`;

export const ChevronRightIcon = styled(VscChevronRight)`
	${SideBarIcons};
`;

export const SectionHeaderTitle = styled.p`
	font-weight: 700;
`;
