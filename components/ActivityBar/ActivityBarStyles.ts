import styled, { css } from 'styled-components';
import { VscAccount, VscCode, VscFiles, VscMail, VscSettingsGear } from 'react-icons/vsc';

export const ActivityBarContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(2, minmax(0, 1fr));
	background-color: var(--activityBar-background);
	color: var(--activityBar-inactiveForeground);
	justify-content: center;
	height: 100%;
	width: 3rem;
`;

export const TopSection = styled.div`
	align-self: flex-start;
`;

export const BottomSection = styled.div`
	align-self: flex-end;
`;

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
