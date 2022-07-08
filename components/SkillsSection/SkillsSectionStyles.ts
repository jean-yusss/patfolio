import styled from 'styled-components';

import H1 from '../H1/H1';
import Skill from '../Skill/Skill';
import Comment from '../../components/Comment/Comment';

export const SkillsSectionContainer = styled.section.attrs({
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

export const SkillsBox = styled.div`
	border-width: 1px;
	border-radius: 0.5rem;
`;

export const SkillsTitle = styled.h2.attrs(
	({ theme }) => theme.includes('Synth') && { className: 'neon-red' }
)`
	text-align: center;
	margin-top: 0.5rem;
	font-weight: 600;
	text-transform: uppercase;

	@media (min-width: 1024px) {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
`;

export const KeepScrolling = styled(Comment).attrs({ comment: 'Keep Scrolling' })``;

export const Skills = styled(H1).attrs({ title: 'Skills' })``;

export const HTML = styled(Skill).attrs({ icon: 'big-html', skill: 'HTML' })``;

export const CSS = styled(Skill).attrs({ icon: 'big-css', skill: 'CSS' })``;

export const JavaScript = styled(Skill).attrs({
	icon: 'big-javascript',
	skill: 'JavaScript'
})``;

export const TypeScript = styled(Skill).attrs({
	icon: 'typescript',
	skill: 'TypeScript'
})``;

export const SQL = styled(Skill).attrs({
	icon: 'sql',
	skill: 'SQL'
})``;

export const React = styled(Skill).attrs({
	icon: 'big-react',
	skill: 'React'
})``;

export const ReactNative = styled(Skill).attrs({
	icon: 'big-react',
	skill: 'React Native'
})``;

export const NextJS = styled(Skill).attrs({
	icon: 'next',
	skill: 'Next.JS'
})``;

export const NodeJS = styled(Skill).attrs({
	icon: 'node',
	skill: 'Node.JS'
})``;

export const Express = styled(Skill).attrs({
	icon: 'express',
	skill: 'Express.JS'
})``;

export const MaterialUI = styled(Skill).attrs({
	icon: 'materialui',
	skill: 'Material UI'
})``;

export const TailwindCSS = styled(Skill).attrs({
	icon: 'tailwind',
	skill: 'TailwindCSS'
})``;

export const Redux = styled(Skill).attrs({
	icon: 'redux',
	skill: 'Redux'
})``;

export const VSCode = styled(Skill).attrs({
	icon: 'vscode',
	skill: 'Visual Studio Code'
})``;

export const Terminal = styled(Skill).attrs({
	icon: 'terminal',
	skill: 'Terminal'
})``;

export const Git = styled(Skill).attrs({
	icon: 'git',
	skill: 'Git'
})``;

export const GitHub = styled(Skill).attrs({
	icon: 'github',
	skill: 'GitHub'
})``;

export const NPM = styled(Skill).attrs({
	icon: 'npm',
	skill: 'NPM'
})``;

export const Yarn = styled(Skill).attrs({
	icon: 'yarn',
	skill: 'Yarn'
})``;

export const Postman = styled(Skill).attrs({
	icon: 'postman',
	skill: 'Postman'
})``;

export const Photoshop = styled(Skill).attrs({
	icon: 'photoshop',
	skill: 'Photoshop'
})``;

export const Word = styled(Skill).attrs({
	icon: 'word',
	skill: 'Microsoft Word'
})``;

export const Excel = styled(Skill).attrs({
	icon: 'excel',
	skill: 'Microsoft Excel'
})``;

export const PowerPoint = styled(Skill).attrs({
	icon: 'powerpoint',
	skill: 'Microsoft PowerPoint'
})``;

export const MacOS = styled(Skill).attrs({
	icon: 'mac',
	skill: 'MacOS'
})``;

export const Linux = styled(Skill).attrs({
	icon: 'linux',
	skill: 'Linus'
})``;

export const Windows = styled(Skill).attrs({
	icon: 'windows',
	skill: 'Windows'
})``;

export const Firebase = styled(Skill).attrs({
	icon: 'firebase',
	skill: 'Firebase'
})``;

export const Stripe = styled(Skill).attrs({
	icon: 'stripe',
	skill: 'Stripe'
})``;

export const GraphQL = styled(Skill).attrs({
	icon: 'graphql',
	skill: 'GraphQL'
})``;

export const PostgreSQL = styled(Skill).attrs({
	icon: 'postgresql',
	skill: 'PostgreSQL'
})``;
