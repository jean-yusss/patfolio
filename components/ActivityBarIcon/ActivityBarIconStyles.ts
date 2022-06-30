import styled, { css } from 'styled-components';

interface ActivityBarIconProps {
	path: string;
	router: string;
}

const ActiveStyles = css`
	background-color: var(--activityBar-activeBackground);
	border-left: 2px solid var(--activityBar-activeBorder);
	color: var(--activityBar-activeForeground);
`;

export const IconContainer = styled.div<ActivityBarIconProps>`
	${({ path, router }) =>
		path === router ? ActiveStyles : 'border-left: 2px solid transparent'};
`;
