import styled from 'styled-components';

export const InputFieldContainer = styled.div`
	& > * + * {
		margin-top: 0.25rem;
	}
`;

export const LabelContainer = styled.div`
	display: flex;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 600;

	@media (min-width: 400px) {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	@media (min-width: 500px) {
		font-size: 1rem;
		line-height: 1.5rem;
	}
`;

export const Label = styled.p.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-pink' }
)`
	text-transform: uppercase;
`;

export const Asterisk = styled.p`
	color: var(--asterisk);
	margin-left: 0.25rem;
`;
