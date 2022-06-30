import styled from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

export const MainContainer = styled.main`
	display: flex;
	height: calc(100vh - 3rem);
	width: 100%;
`;

export const EditorContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: var(--editor-background);
	color: var(--editor-foreground);
	overflow: hidden;
`;
