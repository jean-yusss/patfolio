import styled from 'styled-components';

export const H1Container = styled.div`
	display: flex;
	justify-content: space-between;

	@media (min-width: 1024px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
`;

export const TagContainer = styled.div`
	display: flex;
`;

export const Tag = styled.p`
	color: var(--tag);
`;

export const TagBrackets = styled.p`
	color: var(--tag-brackets);
`;

export const Title = styled.h1`
	text-transform: uppercase;
	font-weight: 600;
`;
