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
	SiFirebase,
	SiGit,
	SiGithub,
	SiGraphql,
	SiJavascript,
	SiMaterialui,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiStripe,
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

import {
	FaCalendarAlt,
	FaDatabase,
	FaSchool,
	FaTerminal,
	FaUserGraduate
} from 'react-icons/fa';

import { FcLinux } from 'react-icons/fc';
import { MdVerified } from 'react-icons/md';

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

// Small icons
const SmallIcons = css`
	height: 1rem;
	width: 1rem;
`;

export const ReactIcon = styled(SiReact)`
	${SmallIcons};
	color: #007acc;
`;

export const HtmlIcon = styled(SiHtml5)`
	${SmallIcons};
	color: #e34c26;
`;

export const CssIcon = styled(SiCss3)`
	${SmallIcons};
	color: #2965f1;
`;

export const JavaScriptIcon = styled(SiJavascript)`
	${SmallIcons};
	color: #f0db4f;
`;

export const JsonIcon = styled(VscJson)`
	${SmallIcons};
	color: #f0db4f;
`;

export const VerifiedIcon = styled(MdVerified)`
	${SmallIcons};
	color: #3794ff;
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

export const FirebaseIcon = styled(SiFirebase)`
	${AboutIcons};
	color: #ffa611;
`;

export const StripeIcon = styled(SiStripe)`
	${AboutIcons};
	color: #6772e5;
`;

export const GraphQLIcon = styled(SiGraphql)`
	${AboutIcons};
	color: #e535ab;
`;

export const PostgreSQLIcon = styled(SiPostgresql)`
	${AboutIcons};
	color: #0064a5;
`;

export const SchoolIcon = styled(FaSchool)`
	${AboutIcons};
`;

export const GraduateIcon = styled(FaUserGraduate)`
	${AboutIcons};
`;

export const CalendarIcon = styled(FaCalendarAlt)`
	${AboutIcons};
`;
