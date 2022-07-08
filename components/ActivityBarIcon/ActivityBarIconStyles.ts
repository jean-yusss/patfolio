import styled, { css } from 'styled-components';

interface ActivityBarIconProps {
	path: string;
	router: string;
}

const ActiveStyles = css`
	background-color: var(--activityBar-activeBackground);
	border-left: var(--activityBar-activeBorder);
	color: var(--activityBar-activeForeground);
`;

const InactiveStyles = css`
	border-left: 2px solid transparent;
`;

export const IconContainer = styled.div<ActivityBarIconProps>`
	${({ path, router }) => (path === router ? ActiveStyles : InactiveStyles)};

	${({ path, router, theme }) =>
		path === router &&
		theme.includes('Synth') &&
		ActiveStyles &&
		'box-shadow: inset 0 -5px 25px #fc28a825'};
`;
