import styled from 'styled-components';

export const ThemeCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	background-color: var(--themeCard-background);
`;

export const ImageContainer = styled.div`
	position: relative;
	height: 7rem;
	width: 7rem;
`;

export const ThemeName = styled.h2`
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 600;
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
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
`;

export const SetThemeButton = styled.button`
	color: var(--themeCardButton-foreground);
	background-color: var(--themeCardButton-background);
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 600;
	padding: 0.125rem 0.625rem;
	margin-top: 0.5rem;

	&:hover {
		background-color: var(--themeCardButton-hoverBackground);
	}
`;
