import { GetStaticProps } from 'next';
import { useTheme } from 'next-themes';

import ProjectCard from '../components/ProjectCard/ProjectCard';

import { getProjects } from './api/projects';

import * as S from '../styles/ProjectsStyles';

const Projects = ({ projects }: ProjectsProps) => {
	const { theme } = useTheme();

	return (
		<S.ProjectsContainer>
			<S.ProjectsTitle theme={theme}>Projects</S.ProjectsTitle>

			<S.Projects>
				{projects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</S.Projects>
		</S.ProjectsContainer>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const projects = getProjects();

	return {
		props: {
			projects,
			title: 'Projects'
		}
	};
};

export default Projects;
