import styled, { css } from 'styled-components';

import {
	VscBell,
	VscCheckAll,
	VscError,
	VscFeedback,
	VscSourceControl,
	VscSymbolNamespace,
	VscSync,
	VscWarning
} from 'react-icons/vsc';

export const StatusBarContainer = styled.footer`
	height: 1.5rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--statusBar-background);
	color: var(--statusBar-foreground);
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding-left: 0.25rem;

	& > * {
		margin-left: 0.5rem;
	}
`;

export const IconTextContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 100%;
	padding-right: 0.25rem;

	&:hover {
		background-color: var(--statusBar-hoverBackground);
	}

	& > * {
		margin-left: 0.25rem;
	}
`;

export const Problems = styled(IconTextContainer)`
	display: none;

	@media (min-width: 362px) {
		display: flex;
	}
`;

export const LineColumn = styled(IconTextContainer)`
	display: none;

	@media (min-width: 662px) {
		display: flex;
	}
`;

export const Spaces = styled(IconTextContainer)`
	display: none;

	@media (min-width: 590px) {
		display: flex;
	}
`;

export const Encoding = styled(IconTextContainer)`
	display: none;

	@media (min-width: 519px) {
		display: flex;
	}
`;

export const EndOfLineSequence = styled(IconTextContainer)`
	display: none;

	@media (min-width: 466px) {
		display: flex;
	}
`;

export const Prettier = styled(IconTextContainer)`
	display: none;

	@media (min-width: 437px) {
		display: flex;
	}
`;

const StatusBarIcons = css`
	height: 0.875rem;
	width: 0.875rem;
`;

export const GitIcon = styled(VscSourceControl)`
	${StatusBarIcons}
`;

export const SyncIcon = styled(VscSync)`
	${StatusBarIcons}
`;

export const ErrorIcon = styled(VscError)`
	${StatusBarIcons}
`;

export const WarningIcon = styled(VscWarning)`
	${StatusBarIcons}
`;

export const BracketsIcon = styled(VscSymbolNamespace)`
	${StatusBarIcons}
`;

export const PrettierIcon = styled(VscCheckAll)`
	${StatusBarIcons}
`;

export const FeedbackIcon = styled(VscFeedback)`
	${StatusBarIcons}
`;

export const BellIcon = styled(VscBell)`
	${StatusBarIcons}
`;

export const StatusBarText = styled.p`
	font-size: 0.75rem;
	line-height: 1rem;
`;

export const RightContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 0.5rem;
	height: 100%;

	& > * {
		margin-left: 0.5rem;
	}
`;
