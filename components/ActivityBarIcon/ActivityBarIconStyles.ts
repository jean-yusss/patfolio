import styled, { css } from 'styled-components';

interface ActivityBarIconProps {
	path: string;
	router: string;
}

const ActiveStyles = css`
	background-color: var(--activityBar-activeBackground);
	border-left-color: var(--activityBar-activeBorder);
	color: var(--activityBar-activeForeground);
`;

const SynthWaveActiveStyles = css`
	${ActiveStyles};
	box-shadow: inset 0 -5px 25px #fc28a825;
`;

export const IconContainer = styled.div<ActivityBarIconProps>`
	border-left: 2px solid transparent;

	${({ path, router }) => path === router && ActiveStyles}

	${({ path, router, theme }) =>
		path === router && theme.includes('Synth') && SynthWaveActiveStyles};
`;
