import styled from 'styled-components';

import H1 from '../components/H1/H1';
import Skill from '../components/Skill/Skill';

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

export const Name = styled(H1).attrs({ title: 'Patrick Nguyen' })``;
