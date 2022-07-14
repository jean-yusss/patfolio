import { useTheme } from 'next-themes';

import * as S from './AboutMeStyles';

const AboutMe = () => {
	const { theme } = useTheme();

	return (
		<S.AboutMeContainer>
			<S.AboutMe />

			<S.TagContainer>
				<S.TagBrackets theme={theme}>{'<'}</S.TagBrackets>
				<S.Tag theme={theme}>p</S.Tag>
				<S.ClassName theme={theme}>className</S.ClassName>
				<S.EqualSign theme={theme}>=</S.EqualSign>
				<S.TailwindClasses
					theme={theme}
				>{`'text-sm text-justify ml-5 space-y-3'`}</S.TailwindClasses>
				<S.TagBrackets theme={theme}>{'>'}</S.TagBrackets>

				<S.TextContainer>
					<S.TagText theme={theme}>
						Hi, my name is Patrick and I enjoy creating things on the internet. My
						interest in web development initially began in 2007 when I was trying to
						customize MySpace backgrounds; little did I know, it taught me a lot about
						HTML and CSS.
					</S.TagText>

					<S.TagText theme={theme}>
						{`Ever since, I've taught myself how to code in hopes to turn my new-found
						passion into reality. From the moment I first produced "Hello World!" in my
						console, I knew that I was hooked to software development. Software
						development has never been "just a job" for me, but an opportunity engaging
						challenges to continually learn and develop my skills in creating applications
						and quality code. What started as a simple "Hello World!" has become a
						full-fledged passion that only gets more exciting as time goes by!`}
					</S.TagText>

					<S.TagText theme={theme}>
						Fast forward to today, I make websites and applications for people as
						freelance work. Some technologies that I enjoy working with recently include:
						React, Next.js and TypeScript.
					</S.TagText>
				</S.TextContainer>

				<S.TagBrackets theme={theme}>{'</'}</S.TagBrackets>
				<S.Tag theme={theme}>p</S.Tag>
				<S.TagBrackets theme={theme}>{'>'}</S.TagBrackets>
			</S.TagContainer>

			<S.EducationComment />

			<S.EducationContainer>
				<S.School />
				<S.Degree />
				<S.GraduationDate />
			</S.EducationContainer>
		</S.AboutMeContainer>
	);
};

export default AboutMe;
