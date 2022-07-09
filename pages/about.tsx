import { GetStaticProps } from 'next';

import AboutMe from '../components/AboutMe/AboutMe';
import SkillsSection from '../components/SkillsSection/SkillsSection';

import { AboutContainer } from '../styles/AboutStyles';

const About = () => (
	<AboutContainer>
		<AboutMe />
		<SkillsSection />
	</AboutContainer>
);

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { title: 'About' }
	};
};

export default About;
