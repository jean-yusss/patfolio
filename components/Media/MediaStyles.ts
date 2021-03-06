import styled from 'styled-components';

import CssAttribute from '../CssAttribute/CssAttribute';

export const MediaContainer = styled.div`
	@media (min-width: 400px) {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	@media (min-width: 640px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	@media (min-width: 1024px) {
		border-right: 1.5px solid var(--contact-border);
		margin-bottom: 2rem;
	}
`;

export const MediaTitle = styled.h1.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-blue' }
)`
	text-align: center;
	font-size: 1.125rem;
	line-height: 1.75rem;
	margin-bottom: 1.5rem;

	@media (min-width: 500px) {
		font-size: 1.25rem;
	}
`;

export const MainContainer = styled.main`
	display: flex;
`;

export const LineContainer = styled.div`
	display: none;
	flex-direction: column;

	@media (min-width: 400px) {
		display: flex;
	}
`;

export const Line = styled.p`
	color: var(--editorLineNumber-foreground);
`;

export const ClassContainer = styled.div`
	@media (min-width: 400px) {
		margin-left: 1rem;
	}
`;

export const Class = styled.div`
	display: flex;
`;

export const ClassName = styled.p.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-yellow' }
)`
	color: var(--className);
	margin-right: 0.5rem;
`;

export const Brackets = styled.p.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-pink' }
)`
	color: var(--brackets);
`;

export const Portfolio = styled(CssAttribute).attrs({
	property: 'Portfolio',
	value: 'https://patfolio.vercel.app/',
	href: 'https://patfolio.vercel.app'
})``;

export const Email = styled(CssAttribute).attrs({
	property: 'Email',
	value: 'iamtiredofyou2@gmail.com',
	href: 'mailto:iamtiredofyou2@gmail.com'
})``;

export const GitHub = styled(CssAttribute).attrs({
	property: 'GitHub',
	value: 'jean-yusss',
	href: 'https://github.com/jean-yusss'
})``;

export const Instagram = styled(CssAttribute).attrs({
	property: 'Instagram',
	value: 'chykneeez',
	href: 'https://www.instagram.com/chykneeez/'
})``;
