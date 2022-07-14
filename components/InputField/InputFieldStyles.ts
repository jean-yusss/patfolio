import styled from 'styled-components';

export const InputFieldContainer = styled.div`
	& > * + * {
		margin-top: 0.25rem;
	}
`;

export const LabelContainer = styled.div`
	display: flex;
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
