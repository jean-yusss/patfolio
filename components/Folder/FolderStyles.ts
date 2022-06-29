import styled from 'styled-components';

export const FolderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FileContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0.375rem;
	padding-left: 1rem;
	cursor: pointer;

	&:hover {
		background-color: var(--list-hoverBackground);
	}

	& > * {
		margin-left: 0.5rem;
	}
`;

export const FileText = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 400;
`;
