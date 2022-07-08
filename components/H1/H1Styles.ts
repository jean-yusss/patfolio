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

	${({ theme }) =>
		theme.includes('Synth') &&
		'text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75'}
`;

export const TagBrackets = styled.p`
	color: var(--tag-brackets);

	${({ theme }) =>
		theme.includes('Synth') &&
		'text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975'}
`;

export const Title = styled.h1`
	text-transform: uppercase;
	font-weight: 600;
`;
