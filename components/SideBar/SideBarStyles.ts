import styled from 'styled-components';

export const SideBarContainer = styled.div`
	height: 100%;
	display: none;
	background-color: var(--sideBar-background);
	color: var(--sideBar-foreground);
	font-size: 0.75rem;
	line-height: 1rem;
	border-top: var(--sideBarSectionHeader-border);
	border-right: var(--sideBar-border);

	@media (min-width: 850px) {
		display: block;
		width: 15rem;
	}
`;

export const ExplorerContainer = styled.div`
	height: 1.95rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1.5rem;
	border-bottom: var(--sideBar-border);
`;

export const Explorer = styled.p`
	font-weight: 300;
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

export const SectionHeaderTitle = styled.p`
	font-weight: 700;
`;
