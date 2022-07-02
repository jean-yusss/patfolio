import styled from 'styled-components';

export const ContactContainer = styled.div.attrs({ className: 'scrollbar-hide' })`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	padding: 1rem;
	overflow-y: scroll;
	overflow-x: hidden;
	font-size: 0.875rem;
	line-height: 1.25rem;

	@media (min-width: 400px) {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	@media (min-width: 500px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	@media (min-width: 1024px) {
		gap: 1.5rem;
		overflow: hidden;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		margin-top: 1rem;
	}
`;
