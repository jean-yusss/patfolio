import styled from 'styled-components';

import InputField from '../InputField/InputField';

export const ContactFormContainer = styled.form`
	font-weight: 500;

	@media (min-width: 1024px) {
		overflow-y: scroll;
	}
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

export const NameInput = styled(InputField).attrs({ label: 'name', type: 'text' })``;

export const EmailInput = styled(InputField).attrs({ label: 'email', type: 'email' })``;

export const SubjectInput = styled(InputField).attrs({
	label: 'subject',
	type: 'text'
})``;

export const MessageInput = styled(InputField).attrs({
	label: 'message',
	type: 'textarea'
})``;
