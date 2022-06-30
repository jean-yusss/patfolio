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
		case 'big-typescript':
			return <S.BigTypeScriptIcon />;
	}
};

export default getIcon;
