import styled from 'styled-components';

export const ContactContainer = styled.div.attrs({
	className: 'scrollbar-hide page-container'
})`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	font-weight: 500;

	@media (min-width: 1024px) {
		gap: 1.5rem;
		overflow: hidden;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;
