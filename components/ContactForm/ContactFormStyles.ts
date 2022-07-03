import styled, { css } from 'styled-components';

import InputField from '../InputField/InputField';

export const ContactFormContainer = styled.form.attrs({ className: 'scrollbar-hide' })`
	font-weight: 500;
	margin-bottom: 2rem;
`;

export const ContactFormTitle = styled.h1`
	text-align: center;
	font-size: 1.125rem;
	line-height: 1.75rem;
	margin-bottom: 1.5rem;

	@media (min-width: 500px) {
		font-size: 1.25rem;
	}
`;

export const Form = styled.div`
	& > * + * {
		margin-top: 0.75rem;
	}
`;

export const NameContainer = styled(InputField).attrs({ label: 'name' })``;

export const EmailContainer = styled(InputField).attrs({ label: 'email' })``;

export const SubjectContainer = styled(InputField).attrs({ label: 'subject' })``;

export const MessageContainer = styled(InputField).attrs({ label: 'message' })``;

const InputStyles = css`
	width: 100%;
	border-radius: 0.375rem;
	outline: 2px solid transparent;
	outline-offset: 2px;
	padding: 0.25rem 0.5rem;
	color: black;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
	${InputStyles};
`;

export const EmailInput = styled.input.attrs({ type: 'email' })`
	${InputStyles};
`;

export const TextArea = styled.textarea.attrs({ rows: 4 })`
	${InputStyles};
`;

export const ErrorContainer = styled.div`
	display: flex;
	align-items: center;
	color: var(--contact-error);
`;

export const Error = styled.p`
	margin-left: 0.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
`;

export const SubmitButton = styled.button`
	padding: 0.75rem 0;
	width: 100%;
	border-radius: 0.375rem;
	text-transform: uppercase;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 700;
	background-color: var(--contact-button);

	@media (min-width: 400px) {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	@media (min-width: 500px) {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	&:hover {
		background-color: var(--contact-hoverButton);
	}
`;
