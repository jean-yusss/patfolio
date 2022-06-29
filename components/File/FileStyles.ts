import styled from 'styled-components';

interface FileProps {
	path: string;
	router: string;
}

export const FileContainer = styled.div<FileProps>`
	display: flex;
	align-items: center;
	padding: 0.375rem;
	padding-left: 1rem;
	cursor: pointer;

	${({ path, router }) =>
		path === router && `background-color: var(--list-activeBackground)`};

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
