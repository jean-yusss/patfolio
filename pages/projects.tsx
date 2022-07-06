import ProjectCard from '../components/ProjectCard/ProjectCard';

import { getProjects } from './api/projects';

import * as S from '../styles/ProjectsStyles';

const Projects = () => {
	const projects = getProjects();

	return (
		<S.ProjectsContainer>
			<S.ProjectsTitle>Projects</S.ProjectsTitle>
			<S.Projects>
				{projects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</S.Projects>
		</S.ProjectsContainer>
	);
};

export default Projects;
