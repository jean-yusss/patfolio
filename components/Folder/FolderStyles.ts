import styled from 'styled-components';

import File from '../../File/File';

export const FolderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HomeFile = styled(File).attrs({
	file: 'Home.tsx',
	icon: 'react',
	path: '/'
})``;

export const AboutFile = styled(File).attrs({
	file: 'About.html',
	icon: 'html',
	path: '/about'
})``;

export const ContactFile = styled(File).attrs({
	file: 'Contact.css',
	icon: 'css',
	path: '/contact'
})``;

export const ProjectsFile = styled(File).attrs({
	file: 'Projects.js',
	icon: 'javaScript',
	path: '/projects'
})``;

export const SettingsFile = styled(File).attrs({
	file: 'Settings.json',
	icon: 'json',
	path: '/settings'
})``;
