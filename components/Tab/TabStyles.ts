import styled, { css } from 'styled-components';

interface TabProps {
	path: string;
	router: string;
}

const ActiveStyles = css`
	border-top: 1.5px solid var(--tab-activeBorder);
	background-color: var(--tab-activeBackground);
	color: var(--tab-activeForeground);
`;

export const TabContainer = styled.div<TabProps>`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	border-right: 1px solid var(--tab-border);
	border-top: 1.5px solid transparent;
	background-color: var(--tab-inactiveBackground);
	color: var(--tab-inactiveForeground);
	cursor: pointer;

	& > p {
		margin-left: 0.5rem;
	}

	${({ path, router }) => path === router && ActiveStyles}
`;

export const TabText = styled.p`
	font-size: 0.875rem;
	line-height: 1rem;
	font-weight: 400;
`;
