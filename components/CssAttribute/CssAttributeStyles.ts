import styled from 'styled-components';

interface ValueProps {
	href: string;
}

export const CssAttributeContainer = styled.div`
	display: flex;
`;

export const Key = styled.p.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-blue' }
)`
	margin-left: 0.5rem;
	color: var(--key);

	@media (min-width: 400px) {
		margin-left: 0.75rem;
	}
`;

export const Colon = styled.p`
	margin-left: 0.125rem;
	color: var(--colon);
`;

export const Value = styled.a.attrs<ValueProps>(({ href, theme }) =>
	href.includes('https')
		? {
				target: '_blank',
				className: theme.includes('Synth') && 'neon-pink'
		  }
		: { className: theme.includes('Synth') && 'neon-pink' }
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
`;

export const SemiColon = styled.p`
	margin-left: 0.125rem;
	color: var(--semicolon);
`;
