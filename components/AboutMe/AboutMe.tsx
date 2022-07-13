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
				>{`'text-sm text-justify font-normal ml-5'`}</S.TailwindClasses>
				<S.TagBrackets theme={theme}>{'>'}</S.TagBrackets>

				<S.TextContainer>
					<S.TagText theme={theme}>
						Hi, my name is Patrick and I enjoy creating things on the internet. My
						interest in web development initially began in 2007 when I was trying to
						customize MySpace backgrounds; little did I know, it taught me a lot about
						HTML and CSS.
					</S.TagText>

					<S.TagText theme={theme}>
						{`Although I majored in mechanical engineering, I got a taste of coding in 
						several courses with MATLAB. In my last year of college, I've decided to 
						take up a computer science minor and enjoyed it more than I thought that I 
						would. In fact, if I could do it over again, I would've majored in computer 
						science instead. Ever since, I've taught myself how to code in hopes to make
						my web development passion into reality.`}
					</S.TagText>

					<S.TagText theme={theme}>
						Fast forward to today, I make websites and applications for people as
						freelance work. My main focus right now is to build quality applications and
						write clean code. Some technologies that I enjoy working with recently
						include: React, Next.js and TypeScript.
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
