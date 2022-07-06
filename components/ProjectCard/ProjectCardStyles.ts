import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
	background-color: var(--projectCard);
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
	transition-property: color, background-color, border-color, text-decoration-color, fill,
		stroke, opacity, box-shadow, transform, filter, backdrop-filter;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 200ms;

	&:hover {
		transform: scale(1.05);
	}

	& > * + * {
		margin-top: 0.5rem;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 12rem;
	width: 100%;
	overflow: hidden;
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
`;

export const ProjectTitle = styled.h2`
	font-size: 1.25rem;
	line-height: 1.75rem;
	text-align: center;
`;

export const ProjectDescription = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	text-align: center;
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0.25rem;
`;

export const TagContainer = styled.div`
	padding: 0.25rem;
	margin: 0 auto;
`;

export const Tag = styled.p`
	font-size: 0.75rem;
	line-height: 1rem;
	border-width: 1px;
	border-radius: 9999px;
	padding: 0.375rem;
	cursor: pointer;
`;

export const LinkContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	padding-bottom: 1rem;
`;

export const ProjectLink = styled.a.attrs({ target: '_blank' })`
	text-align: center;

	&:hover {
		text-decoration: underline;
	}
`;
