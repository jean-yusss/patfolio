import styled from 'styled-components';

export const ContactFormContainer = styled.div`
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
