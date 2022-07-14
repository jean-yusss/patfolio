import styled from 'styled-components';

export const AboutContainer = styled.div.attrs({
	className: 'scrollbar-hide page-container'
})`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));

	@media (min-width: 1024px) {
		gap: 2rem;
		overflow: hidden;
		font-size: 1rem;
		line-height: 1.5rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;
