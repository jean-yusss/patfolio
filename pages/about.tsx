import AboutMe from '../components/AboutMe/AboutMe';
import SkillsSection from '../components/SkillsSection/SkillsSection';

import { AboutContainer } from '../styles/AboutStyles';

const About = () => (
	<AboutContainer>
		<AboutMe />
		<SkillsSection />
	</AboutContainer>
);

export default About;
