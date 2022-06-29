import styled, { css } from 'styled-components';

import {
	VscAccount,
	VscBell,
	VscCheckAll,
	VscChevronDown,
	VscChevronRight,
	VscCode,
	VscEllipsis,
	VscError,
	VscFeedback,
	VscFiles,
	VscJson,
	VscMail,
	VscSettingsGear,
	VscSourceControl,
	VscSymbolNamespace,
	VscSync,
	VscWarning
} from 'react-icons/vsc';

import { SiCss3, SiHtml5, SiJavascript, SiReact } from 'react-icons/si';
import { HiOutlineX, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';

// ActivityBar icons
const ActivityBarIcons = css`
	height: 3rem;
	width: 3rem;
	padding: 0.7rem;
	cursor: pointer;

	&:hover {
		color: var(--activityBar-hoverForeground);
	}
`;

export const FilesIcon = styled(VscFiles)`
	${ActivityBarIcons}
`;

export const MailIcon = styled(VscMail)`
	${ActivityBarIcons}
`;

export const CodeIcon = styled(VscCode)`
	${ActivityBarIcons}
`;

export const AccountIcon = styled(VscAccount)`
	${ActivityBarIcons}
`;

export const SettingsIcon = styled(VscSettingsGear)`
	${ActivityBarIcons}
`;

// File and Tab icons
const FileAndTabIcons = css`
	height: 1rem;
	width: 1rem;
`;

export const ReactIcon = styled(SiReact)`
	${FileAndTabIcons};
	color: #007acc;
`;

export const HtmlIcon = styled(SiHtml5)`
	${FileAndTabIcons};
	color: #e34c26;
`;

export const CssIcon = styled(SiCss3)`
	${FileAndTabIcons};
	color: #2965f1;
`;

export const JavaScriptIcon = styled(SiJavascript)`
	${FileAndTabIcons};
	color: #f0db4f;
`;

export const JsonIcon = styled(VscJson)`
	${FileAndTabIcons};
	color: #f0db4f;
`;

// SideBar icons
const SideBarIcons = css`
	height: 1rem;
	width: 1rem;
`;

export const EllipsisIcon = styled(VscEllipsis)`
	${SideBarIcons};
	border-radius: 0.125rem;
	cursor: pointer;

	&:hover {
		background-color: var(--list-hoverBackground);
	}
`;

export const ChevronDownIcon = styled(VscChevronDown)`
	${SideBarIcons};
`;

export const ChevronRightIcon = styled(VscChevronRight)`
	${SideBarIcons};
`;

// TitleBarIcons
const TitleBarIcons = css`
	height: 0.75rem;
	width: 0.75rem;
	padding: 0.1rem;
	opacity: 0;

	&:hover {
		opacity: 0.5;
	}
`;

export const CloseIcon = styled(HiOutlineX)`
	${TitleBarIcons};
`;

export const MinimizeIcon = styled(HiOutlineMinus)`
	${TitleBarIcons};
`;

export const MaximizeIcon = styled(HiOutlinePlus)`
	${TitleBarIcons};
`;

// StatusBar icons
const StatusBarIcons = css`
	height: 0.875rem;
	width: 0.875rem;
`;

export const SourceControlIcon = styled(VscSourceControl)`
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
