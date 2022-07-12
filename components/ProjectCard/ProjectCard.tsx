import Image from 'next/image';
import { useTheme } from 'next-themes';

import * as S from './ProjectCardStyles';

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { theme } = useTheme();

	return (
		<S.ProjectCardContainer>
			<S.ImageContainer>
				<Image src={project.image} alt='' layout='fill' objectFit='cover' />
			</S.ImageContainer>

			<S.ProjectTitle theme={theme}>{project.name}</S.ProjectTitle>
			<S.ProjectDescription theme={theme}>{project.description}</S.ProjectDescription>

			<S.Tags>
				{project.tags.map(tag => (
					<S.TagContainer key={tag}>
						<S.Tag className={tag}>{tag}</S.Tag>
					</S.TagContainer>
				))}
			</S.Tags>

			<S.LinkContainer theme={theme}>
				<S.ProjectLink href={project.demo}>Live Demo</S.ProjectLink>
				<S.ProjectLink href={project.source}>Source Code</S.ProjectLink>
			</S.LinkContainer>
		</S.ProjectCardContainer>
	);
};

export default ProjectCard;
