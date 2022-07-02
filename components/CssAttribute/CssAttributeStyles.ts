import styled from 'styled-components';

interface ValueProps {
	href: string;
}

export const CssAttributeContainer = styled.div`
	display: flex;
`;

export const Key = styled.p`
	padding-left: 0.5rem;
	color: var(--key);

	@media (min-width: 400px) {
		padding-left: 0.75rem;
	}
`;

export const Colon = styled.p`
	padding-left: 0.125rem;
	font-weight: 600;
	color: var(--colon);
`;

export const Value = styled.a.attrs<ValueProps>(({ href }) =>
	href.includes('https') ? { target: '_blank' } : { target: '_self' }
)`
	padding-left: 0.25rem;
	color: var(--value);
	cursor: pointer;

	@media (min-width: 400px) {
		padding-left: 0.5rem;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const SemiColon = styled.p`
	padding-left: 0.125rem;
	font-weight: 600;
	color: var(--semicolon);
`;
