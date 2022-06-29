import styled from 'styled-components';

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
