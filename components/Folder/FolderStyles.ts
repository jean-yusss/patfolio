import styled, { css } from 'styled-components';
import { VscJson } from 'react-icons/vsc';
import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';

export const FolderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FileContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 0.375rem;
	padding-left: 1rem;
	cursor: pointer;

	&:hover {
		background-color: var(--list-hoverBackground);
	}

	& > * {
		margin-left: 0.5rem;
	}
`;

const FolderIcons = css`
	height: 1rem;
	width: 1rem;
`;

export const ReactIcon = styled(SiReact)`
	${FolderIcons};
	color: #007acc;
`;

export const HTMLIcon = styled(SiHtml5)`
	${FolderIcons};
	color: #e34c26;
`;

export const CSSIcon = styled(SiCss3)`
	${FolderIcons};
	color: #2965f1;
`;

export const JavaScriptIcon = styled(SiJavascript)`
	${FolderIcons};
	color: #f0db4f;
`;

export const JsonIcon = styled(VscJson)`
	${FolderIcons};
	color: #f0db4f;
`;

export const FileText = styled.p`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 400;
`;
