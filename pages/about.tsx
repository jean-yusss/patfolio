import AboutMe from '../components/AboutMe/AboutMe';
import Comment from '../components/Comment/Comment';
import SkillsSection from '../components/SkillsSection/SkillsSection';

import * as S from '../styles/AboutStyles';

const About = () => (
	<div className='h-full w-full grid grid-cols-1 lg:grid-cols-2 p-4 overflow-y-scroll lg:gap-8 lg:overflow-hidden scrollbar-hide'>
		<AboutMe />

		<SkillsSection />
	</div>
);

export default About;
