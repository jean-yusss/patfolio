interface ActivityBarIconProps {
	path: string;
	icon: string;
}

interface TabProps {
	icon: string;
	tab: string;
	path: string;
}

interface FileProps {
	file: string;
	icon: string;
	path: string;
}

interface LayoutProps {
	children: JSX.Element;
}

interface SkillProps {
	icon: string;
	skill: string;
	margin?: string;
}

interface CommentProps {
	comment: string;
}

interface H1Props {
	title: string;
}

interface CssAttributeProps {
	property: string;
	value: string;
	href: string;
}

interface InputFieldProps {
	label: string;
	children: React.ReactNode;
}

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface Project {
	id: number;
	name: string;
	image: string;
	description: string;
	tags: string[];
	source: string;
	demo: string;
}

interface ProjectCardProps {
	project: Project;
}

interface ProjectsProps {
	projects: Project[];
}

interface Theme {
	theme: string;
	developers: string;
	image: string;
}

interface SettingsProps {
	themes: Theme[];
}

interface ThemeCardProps {
	theme: Theme;
}
