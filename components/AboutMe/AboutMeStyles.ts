import styled from 'styled-components';

import H1 from '../H1/H1';
import Skill from '../Skill/Skill';

export const AboutMeContainer = styled.section.attrs({
	className: 'scrollbar-hide'
})`
	padding-bottom: 3rem;

	@media (min-width: 1024px) {
		overflow-y: scroll;
	}

	& > * + * {
		margin-top: 2rem;
	}
`;

export const Name = styled(H1).attrs({ title: 'Patrick Nguyen' })``;

export const TagContainer = styled.div`
	@media (min-width: 1024px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
`;

export const TagBrackets = styled.span`
	color: var(--tag-brackets);
`;

export const Tag = styled.span`
	color: var(--tag);
`;

export const ClassName = styled.span`
	color: var(--className);
	margin-left: 0.5rem;
`;

export const TailwindClasses = styled.span`
	color: var(--string);
`;

export const TagText = styled.p`
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

export const EducationContainer = styled.div`
	& > * + * {
		margin-top: 1rem;
	}
`;

export const School = styled(Skill).attrs({
	icon: 'school',
	skill: 'University of Central Florida',
	padding: 'false'
})``;

export const Degree = styled(Skill).attrs({
	icon: 'graduate',
	skill: 'Bachelor of Science in Mechanical Engineering',
	padding: 'false'
})``;

export const GraduationDate = styled(Skill).attrs({
	icon: 'calendar',
	skill: 'December 2018',
	padding: 'false'
})``;
