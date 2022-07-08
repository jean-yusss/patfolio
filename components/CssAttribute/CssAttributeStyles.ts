import styled from 'styled-components';

interface ValueProps {
	href: string;
}

export const CssAttributeContainer = styled.div`
	display: flex;
`;

export const Key = styled.p`
	margin-left: 0.5rem;
	color: var(--key);

	@media (min-width: 400px) {
		margin-left: 0.75rem;
	}
`;

export const Colon = styled.p`
	margin-left: 0.125rem;
	font-weight: 600;
	color: var(--colon);
`;

export const Value = styled.a.attrs<ValueProps>(
	({ href }) => href.includes('https') && { target: '_blank' }
)`
	margin-left: 0.25rem;
	color: var(--value);
	cursor: pointer;

	@media (min-width: 400px) {
		margin-left: 0.5rem;
	}

	&:hover {
		text-decoration: underline;
	}

	${({ theme }) =>
		theme.includes('Synth') &&
		'text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75;'}
`;

export const SemiColon = styled.p`
	margin-left: 0.125rem;
	font-weight: 600;
	color: var(--semicolon);
`;
