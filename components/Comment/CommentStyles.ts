import styled from 'styled-components';

export const CommentContainer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.25rem;
	line-height: 1.75rem;

	& > p {
		margin-left: 1rem;
	}
`;

export const CommentText = styled.p`
	color: var(--comment);
`;
