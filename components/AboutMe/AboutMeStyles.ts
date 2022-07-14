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

export const AboutMe = styled(H1).attrs({ title: 'About Me' })``;

export const TagContainer = styled.div`
	@media (min-width: 1024px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
`;

export const TagBrackets = styled.span.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-blue' }
)`
	color: var(--tag-brackets);
`;

export const Tag = styled.span.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-red' }
)`
	color: var(--tag);
`;

export const EqualSign = styled.span.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-yellow' }
)`
	color: var(--equalSign);
`;

export const ClassName = styled.span.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-yellow' }
)`
	color: var(--className);
	margin-left: 0.5rem;
`;

export const TailwindClasses = styled.span.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-pink' }
)`
	color: var(--string);
`;

export const TextContainer = styled.div`
	& > * + * {
		margin-top: 0.75rem;
	}
`;

export const TagText = styled.p.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-blue' }
)`
	padding: 0 1.25rem;
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
