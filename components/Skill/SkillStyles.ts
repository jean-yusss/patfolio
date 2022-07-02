import styled from 'styled-components';

interface SkillProps {
	margin?: string;
}

export const SkillContainer = styled.div<SkillProps>`
	display: flex;
	align-items: center;
	margin: 1rem 0;

	margin-left: ${({ margin }) => !margin && '1.25rem'};

	& > * + * {
		margin-left: 1rem;
	}
`;

export const SkillText = styled.p`
	font-weight: 600;
`;
