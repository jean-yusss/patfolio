import styled from 'styled-components';
import Skill from '../components/Skill/Skill';

export const HTML = styled(Skill).attrs({ icon: 'big-html', skill: 'HTML' })``;

export const CSS = styled(Skill).attrs({ icon: 'big-css', skill: 'CSS' })``;

export const JavaScript = styled(Skill).attrs({
	icon: 'big-javascript',
	skill: 'JavaScript'
})``;

export const TypeScript = styled(Skill).attrs({
	icon: 'big-typescript',
	skill: 'TypeScript'
})``;
