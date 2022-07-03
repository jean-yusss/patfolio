import styled, { css } from 'styled-components';

export const InputFieldContainer = styled.div`
	& > * + * {
		margin-top: 0.5rem;
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

export const Label = styled.p`
	text-transform: uppercase;
`;

export const Asterisk = styled.p`
	color: var(--asterisk);
	margin-left: 0.25rem;
`;

const InputStyles = css`
	width: 100%;
	border-radius: 0.375rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
	padding: 0.25rem;
	color: black;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
	${InputStyles};
`;

export const EmailInput = styled.input.attrs({ type: 'email' })`
	${InputStyles};
`;

export const TextArea = styled.textarea.attrs({ rows: 5 })`
	${InputStyles};
`;
