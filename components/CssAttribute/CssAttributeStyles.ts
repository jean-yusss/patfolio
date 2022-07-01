import styled from 'styled-components';

export const CssAttributeContainer = styled.div`
	display: flex;
`;

export const Key = styled.p`
	padding-left: 1rem;
	color: var(--key);
`;

export const Colon = styled.p`
	padding-left: 0.125rem;
	font-weight: 600;
	color: var(--colon);
`;

export const Value = styled.a`
	padding-left: 0.5rem;
	color: var(--value);
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

export const SemiColon = styled.p`
	padding-left: 0.125rem;
	font-weight: 600;
`;
