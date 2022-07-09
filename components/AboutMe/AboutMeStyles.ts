import styled from 'styled-components';

import H1 from '../H1/H1';
import Skill from '../Skill/Skill';
import Comment from '../Comment/Comment';

export const AboutMeContainer = styled.section.attrs({
	className: 'scrollbar-hide'
})`
	margin-bottom: 2rem;

	@media (min-width: 1024px) {
		overflow-y: scroll;
	}

	& > * + * {
		margin-top: 2rem;
	}
`;

export const Name = styled(H1).attrs({
	title: 'Patrick Nguyen'
})``;

export const TagContainer = styled.div`
	@media (min-width: 1024px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
`;

export const TagBrackets = styled.span.attrs({ className: 'neon-blue' })`
	color: var(--tag-brackets);
`;

export const Tag = styled.span.attrs({ className: 'neon-red' })`
	color: var(--tag);
`;

export const EqualSign = styled.span`
	color: var(--equalSign);
`;

export const ClassName = styled.span.attrs({ className: 'neon-yellow' })`
	color: var(--className);
	margin-left: 0.5rem;
`;

export const TailwindClasses = styled.span`
	color: var(--string);
`;

export const TagText = styled.p.attrs({ className: 'neon-blue' })`
	margin: 0.25rem 1.25rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 400;
	text-align: justify;

	@media (min-width: 1024px) {
		font-size: 1rem;
		line-height: 1.5rem;
	}
`;

export const EducationComment = styled(Comment).attrs({ comment: 'Education' })``;

export const EducationContainer = styled.div`
	& > * + * {
		margin-top: 1rem;
	}
`;

export const School = styled(Skill).attrs({
	icon: 'school',
	skill: 'University of Central Florida',
	margin: 'false'
})``;

export const Degree = styled(Skill).attrs({
	icon: 'graduate',
	skill: 'Bachelor of Science in Mechanical Engineering',
	margin: 'false'
})``;

export const GraduationDate = styled(Skill).attrs({
	icon: 'calendar',
	skill: 'December 2018',
	margin: 'false'
})``;
