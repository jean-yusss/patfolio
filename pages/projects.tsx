import ProjectCard from '../components/ProjectCard/ProjectCard';
import { getProjects } from './api/projects';

const Projects = () => {
	const projects = getProjects();

	return (
		<div className='p-4 h-full w-full'>
			<h1 className='text-2xl text-center'>Projects</h1>
			<div className='grid grid-cols-3 gap-8 mt-4'>
				{projects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
