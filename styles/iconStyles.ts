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

import {
	SiCss3,
	SiHtml5,
	SiExpress,
	SiGit,
	SiGithub,
	SiJavascript,
	SiMaterialui,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
	SiVisualstudiocode,
	SiNpm,
	SiYarn,
	SiPostman,
	SiAdobephotoshop,
	SiMicrosoftpowerpoint,
	SiMicrosoftexcel,
	SiMicrosoftword,
	SiApple,
	SiWindows
} from 'react-icons/si';

import { HiOutlineX, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import { FaDatabase, FaTerminal } from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';

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

// About Page icons
const AboutIcons = css`
	height: 1.5rem;
	width: 1.5rem;
`;

export const BigHtmlIcon = styled(SiHtml5)`
	${AboutIcons};
	color: #e34c26;
`;

export const BigCssIcon = styled(SiCss3)`
	${AboutIcons};
	color: #2965f1;
`;

export const BigJavaScriptIcon = styled(SiJavascript)`
	${AboutIcons};
	color: #f0db4f;
`;

export const TypeScriptIcon = styled(SiTypescript)`
	${AboutIcons};
	color: #007acc;
`;

export const SQLIcon = styled(FaDatabase)`
	${AboutIcons};
	color: #0098d8;
`;

export const BigReactIcon = styled(SiReact)`
	${AboutIcons};
	color: #61dbfb;
`;

export const NextJSIcon = styled(SiNextdotjs)`
	${AboutIcons};
`;

export const NodeIcon = styled(SiNodedotjs)`
	${AboutIcons};
	color: #3c873a;
`;

export const ExpressIcon = styled(SiExpress)`
	${AboutIcons};
`;

export const MaterialUIIcon = styled(SiMaterialui)`
	${AboutIcons};
	color: #2196f3;
`;

export const TailwindIcon = styled(SiTailwindcss)`
	${AboutIcons};
	color: #00b4b6;
`;

export const ReduxIcon = styled(SiRedux)`
	${AboutIcons};
	color: #764abc;
`;

export const VSCodeIcon = styled(SiVisualstudiocode)`
	${AboutIcons};
	color: #0078d7;
`;

export const TerminalIcon = styled(FaTerminal)`
	${AboutIcons};
`;

export const GitIcon = styled(SiGit)`
	${AboutIcons};
	color: #f34f29;
`;

export const GithubIcon = styled(SiGithub)`
	${AboutIcons};
`;

export const NpmIcon = styled(SiNpm)`
	${AboutIcons};
	color: #cc3534;
`;

export const YarnIcon = styled(SiYarn)`
	${AboutIcons};
	color: #117cad;
	background-color: white;
	border-radius: 9999px;
`;

export const PostmanIcon = styled(SiPostman)`
	${AboutIcons};
	color: #ef5b25;
`;

export const PhotoshopIcon = styled(SiAdobephotoshop)`
	${AboutIcons};
	color: #4fccfe;
`;

export const WordIcon = styled(SiMicrosoftword)`
	${AboutIcons};
	color: #0078d7;
`;

export const ExcelIcon = styled(SiMicrosoftexcel)`
	${AboutIcons};
	color: #1d6f42;
`;

export const PowerPointIcon = styled(SiMicrosoftpowerpoint)`
	${AboutIcons};
	color: #d04423;
`;

export const AppleIcon = styled(SiApple)`
	${AboutIcons};
`;

export const WindowsIcon = styled(SiWindows)`
	${AboutIcons};
	color: #00a2ed;
`;

export const LinuxIcon = styled(FcLinux)`
	${AboutIcons};
`;
