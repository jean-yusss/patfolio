import styled from 'styled-components';
import Tab from '../Tab/Tab';

export const EditorGroupHeaderContainer = styled.div.attrs({
	className: 'scrollbar-hide'
})`
	display: flex;
	background-color: var(--editorGroupHeader-background);
	overflow-x: scroll;
	overflow-y: hidden;
	height: 2rem;
	align-items: center;
`;

export const HomeTab = styled(Tab).attrs({
	path: '/',
	tab: 'Home.tsx',
	icon: 'react'
})``;

export const AboutTab = styled(Tab).attrs({
	path: '/about',
	tab: 'About.html',
	icon: 'html'
})``;

export const ContactTab = styled(Tab).attrs({
	path: '/contact',
	tab: 'Contact.css',
	icon: 'react'
})``;

export const ProjectsTab = styled(Tab).attrs({
	path: '/projects',
	tab: 'Projects.js',
	icon: 'javaScript'
})``;

export const SettingsTab = styled(Tab).attrs({
	path: '/settings',
	tab: 'Settings.json',
	icon: 'json'
})``;
