import * as S from '../styles/iconStyles';

const getIcon = (icon: string) => {
	switch (icon) {
		case 'close':
			return <S.CloseIcon />;
		case 'minimize':
			return <S.MinimizeIcon />;
		case 'maximize':
			return <S.MaximizeIcon />;
		case 'files':
			return <S.FilesIcon />;
		case 'mail':
			return <S.MailIcon />;
		case 'code':
			return <S.CodeIcon />;
		case 'account':
			return <S.AccountIcon />;
		case 'settings':
			return <S.SettingsIcon />;
		case 'sourceControl':
			return <S.SourceControlIcon />;
		case 'sync':
			return <S.SyncIcon />;
		case 'error':
			return <S.ErrorIcon />;
		case 'warning':
			return <S.WarningIcon />;
		case 'brackets':
			return <S.BracketsIcon />;
		case 'prettier':
			return <S.PrettierIcon />;
		case 'feedback':
			return <S.FeedbackIcon />;
		case 'bell':
			return <S.BellIcon />;
		case 'ellipsis':
			return <S.EllipsisIcon />;
		case 'chevronDown':
			return <S.ChevronDownIcon />;
		case 'chevronRight':
			return <S.ChevronRightIcon />;
		case 'react':
			return <S.ReactIcon />;
		case 'html':
			return <S.HtmlIcon />;
		case 'css':
			return <S.CssIcon />;
		case 'javascript':
			return <S.JavaScriptIcon />;
		case 'json':
			return <S.JsonIcon />;
		case 'big-html':
			return <S.BigHtmlIcon />;
		case 'big-css':
			return <S.BigCssIcon />;
		case 'big-javascript':
			return <S.BigJavaScriptIcon />;
		case 'typescript':
			return <S.TypeScriptIcon />;
		case 'sql':
			return <S.SQLIcon />;
		case 'big-react':
			return <S.BigReactIcon />;
		case 'next':
			return <S.NextJSIcon />;
		case 'node':
			return <S.NodeIcon />;
		case 'express':
			return <S.ExpressIcon />;
		case 'materialui':
			return <S.MaterialUIIcon />;
		case 'tailwind':
			return <S.TailwindIcon />;
		case 'redux':
			return <S.ReduxIcon />;
		case 'vscode':
			return <S.VSCodeIcon />;
		case 'terminal':
			return <S.TerminalIcon />;
		case 'git':
			return <S.GitIcon />;
		case 'github':
			return <S.GithubIcon />;
		case 'npm':
			return <S.NpmIcon />;
		case 'yarn':
			return <S.YarnIcon />;
		case 'postman':
			return <S.PostmanIcon />;
		case 'photoshop':
			return <S.PhotoshopIcon />;
		case 'word':
			return <S.WordIcon />;
		case 'excel':
			return <S.ExcelIcon />;
		case 'powerpoint':
			return <S.PowerPointIcon />;
		case 'mac':
			return <S.AppleIcon />;
		case 'windows':
			return <S.WindowsIcon />;
		case 'linux':
			return <S.LinuxIcon />;
		case 'firebase':
			return <S.FirebaseIcon />;
		case 'stripe':
			return <S.StripeIcon />;
		case 'graphql':
			return <S.GraphQLIcon />;
		case 'postgresql':
			return <S.PostgreSQLIcon />;
		case 'school':
			return <S.SchoolIcon />;
		case 'graduate':
			return <S.GraduateIcon />;
		case 'calendar':
			return <S.CalendarIcon />;
	}
};

export default getIcon;
