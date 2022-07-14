import styled from 'styled-components';

export const ThemeCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	font-weight: 600;
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 7rem;
	width: 7rem;
`;

export const ThemeName = styled.h2`
	font-size: 1.125rem;
	line-height: 1.75rem;
	margin-top: 0.25rem;
`;

export const ThemeDevelopersCntainer = styled.div`
	display: flex;
	align-items: center;

	& > * + * {
		margin-left: 0.25rem;
	}
`;

export const ThemeDevelopers = styled.p`
	font-weight: 500;
`;

export const SetThemeButton = styled.button`
	color: var(--extensionButton-prominentForeground);
	background-color: var(--extensionButton-prominentBackground);
	padding: 0.125rem 0.625rem;
	margin-top: 0.5rem;

	&:hover {
		background-color: var(--extensionButton-prominentHoverBackground);
	}
`;
