import styled, { css } from 'styled-components';

export const TitleBarContainer = styled.header`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	align-items: center;
	height: 1.5rem;
	width: 100%;
	background-color: var(--titleBar-background);
`;

export const WindowButtons = styled.div`
	display: flex;

	& > * {
		margin-left: 0.5rem;
	}
`;

const WindowButton = css`
	height: 0.75rem;
	width: 0.75rem;
	border-radius: 9999px;
`;

export const CloseButton = styled.div`
	${WindowButton};
	background-color: #ff605c;
`;

export const MinimizeButton = styled.div`
	${WindowButton};
	background-color: #ffbd44;
`;

export const MaximizeButton = styled.div`
	${WindowButton};
	background-color: #00ca4e;
`;

export const TitleBarTitle = styled.h1`
	color: var(--titleBar-foreground);
	font-size: 0.875rem;
	line-height: 1.25rem;
	text-align: center;
`;
