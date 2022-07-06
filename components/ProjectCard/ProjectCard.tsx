import Image from 'next/image';

import * as S from './ProjectCardStyles';

interface Props {
	project: Project;
}

const ProjectCard = ({ project }: Props) => (
	<S.ProjectCardContainer>
		<S.ImageContainer>
			<Image src={project.image} alt='' layout='fill' objectFit='cover' />
		</S.ImageContainer>

		<S.ProjectTitle>{project.name}</S.ProjectTitle>
		<S.ProjectDescription>{project.description}</S.ProjectDescription>

		<S.Tags>
			{project.tags.map(tag => (
				<S.TagContainer key={tag}>
					<S.Tag className={tag}>{tag}</S.Tag>
				</S.TagContainer>
			))}
		</S.Tags>

		<S.LinkContainer>
			<S.ProjectLink href={project.demo}>Live Demo</S.ProjectLink>
			<S.ProjectLink href={project.source}>Source Code</S.ProjectLink>
		</S.LinkContainer>
	</S.ProjectCardContainer>
);

export default ProjectCard;
