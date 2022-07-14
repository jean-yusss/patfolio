import styled from 'styled-components';

export const ProjectsContainer = styled.div.attrs({
	className: 'scrollbar-hide page-container'
})``;

export const ProjectsTitle = styled.h1.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-yellow' }
)`
	font-size: 1.25rem;
	line-height: 1.75rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
`;

export const Projects = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
	margin-bottom: 3rem;
`;
