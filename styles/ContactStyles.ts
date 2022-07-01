import styled from 'styled-components';

import CssAttribute from '../components/CssAttribute/CssAttribute';

export const ContactContainer = styled.div.attrs({ className: 'scrollbar-hide' })`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	padding: 1rem;
	overflow-y: scroll;
	overflow-x: hidden;

	@media (min-width: 1024px) {
		gap: 2rem;
		overflow: hidden;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const PortfolioWebsite = styled(CssAttribute).attrs({
	property: 'Website',
	value: 'https://patfolio.vercel.app/'
})``;

export const GitHub = styled(CssAttribute).attrs({
	property: 'GitHub',
	value: 'https://github.com/jean-yusss'
})``;
