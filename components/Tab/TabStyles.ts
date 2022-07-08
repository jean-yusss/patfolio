import styled, { css } from 'styled-components';

interface TabProps {
	path: string;
	router: string;
}

const ActiveStyles = css`
	border-top-color: var(--tab-activeBorder);
	background-color: var(--tab-activeBackground);
	color: var(--tab-activeForeground);
	border-bottom: 0;
`;

const SynthWaveStyles = css`
	${ActiveStyles};
	box-shadow: inset 0 -5px 25px #fc28a825;
`;

export const TabContainer = styled.div<TabProps>`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0.5rem 1rem;
	border-right: var(--tab-divide);
	border-top: var(--tab-border);
	border-bottom: var(--tab-border);
	background-color: var(--tab-inactiveBackground);
	color: var(--tab-inactiveForeground);
	cursor: pointer;

	& > * + * {
		margin-left: 0.5rem;
	}

	&:hover {
		color: var(--tab-hoverForeground);
		background-color: var(--tab-hoverBackground);
	}

	${({ path, router }) => path === router && ActiveStyles}

	${({ path, router, theme }) =>
		path === router && theme.includes('Synth') && SynthWaveStyles};
`;

export const TabText = styled.p`
	font-size: 0.875rem;
	line-height: 0.75rem;
	font-weight: 400;
`;
