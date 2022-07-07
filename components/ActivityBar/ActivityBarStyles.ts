import styled from 'styled-components';

import ActivityBarIcon from '../ActivityBarIcon/ActivityBarIcon';

export const ActivityBarContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(2, minmax(0, 1fr));
	background-color: var(--activityBar-background);
	color: var(--activityBar-inactiveForeground);
	justify-content: center;
	height: 100%;
	width: 3rem;
	border-left: 1px solid var(--border);
	border-right: 1px solid var(--border);
	border-top: 1px solid var(--border);
`;

export const TopSection = styled.div`
	align-self: flex-start;
`;

export const BottomSection = styled.div`
	align-self: flex-end;
`;

export const FilesIcon = styled(ActivityBarIcon).attrs({ path: '/', icon: 'files' })``;

export const MailIcon = styled(ActivityBarIcon).attrs({
	path: '/contact',
	icon: 'mail'
})``;

export const CodeIcon = styled(ActivityBarIcon).attrs({
	path: '/projects',
	icon: 'code'
})``;

export const AccountIcon = styled(ActivityBarIcon).attrs({
	path: '/about',
	icon: 'account'
})``;

export const SettingsIcon = styled(ActivityBarIcon).attrs({
	path: '/settings',
	icon: 'settings'
})``;
