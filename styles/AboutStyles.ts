import styled from 'styled-components';

export const AboutContainer = styled.div.attrs({ className: 'scrollbar-hide' })`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	padding: 1rem;
	overflow-y: scroll;

	@media (min-width: 1024px) {
		gap: 2rem;
		overflow: hidden;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;
