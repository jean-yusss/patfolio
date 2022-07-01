import Comment from '../Comment/Comment';

import * as S from './AboutMeStyles';

const AboutMe = () => (
	<S.AboutMeContainer>
		<S.Name />

		<S.TagContainer>
			<S.TagBrackets>{'<'}</S.TagBrackets>
			<S.Tag>p</S.Tag>
			<S.ClassName>className</S.ClassName>
			<S.Tag>=</S.Tag>
			<S.TailwindClasses>'text-sm text-justify font-normal ml-5'</S.TailwindClasses>
			<S.TagBrackets>{'>'}</S.TagBrackets>

			<S.TagText>{`From the moment I first produced "Hello World!" in my console, I knew that I was hooked to software development. Software development has never been "just a job" for me, but an opportunity engaging challenges to continually learn and develop my skills in creating applications and quality code. What started as a simple "Hello World!" has become a full-fledged passion that only gets more exciting as time goes by!`}</S.TagText>

			<S.TagBrackets>{'</'}</S.TagBrackets>
			<S.Tag>p</S.Tag>
			<S.TagBrackets>{'>'}</S.TagBrackets>
		</S.TagContainer>

		<Comment comment='Education' />

		<S.EducationContainer>
			<S.School />
			<S.Degree />
			<S.GraduationDate />
		</S.EducationContainer>
	</S.AboutMeContainer>
);

export default AboutMe;
