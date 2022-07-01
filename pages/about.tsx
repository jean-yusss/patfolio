import Comment from '../components/Comment/Comment';
import SkillsSection from '../components/SkillsSection/SkillsSection';

import * as S from '../styles/AboutStyles';

const About = () => (
	<div className='h-full w-full grid grid-cols-1 lg:grid-cols-2 p-4 overflow-y-scroll lg:gap-8 lg:overflow-hidden scrollbar-hide'>
		<div className='space-y-8 pb-12 scrollbar-hide lg:overflow-y-scroll'>
			<S.Name />

			<div className='lg:text-lg'>
				<span>{'<'}</span>
				<span className='text-[#FF79C6]'>p</span>
				<span className='text-[#50FA7B] ml-2'>className</span>
				<span className='text-[#ff79c6]'>=</span>
				<span className='text-[#f1fa8c]'>'text-sm text-justify font-normal ml-5'</span>
				<span>{'>'}</span>

				<p className='ml-5 my-1 text-sm lg:text-base font-normal text-justify'>{`From the moment I first produced "Hello World!" in my console, I knew that I was hooked to software development. Software development has never been "just a job" for me, but an opportunity engaging challenges to continually learn and develop my skills in creating applications and quality code. What started as a simple "Hello World!" has become a full-fledged passion that only gets more exciting as time goes by!`}</p>

				<span>{'</'}</span>
				<span className='text-[#FF79C6]'>p</span>
				<span>{'>'}</span>
			</div>

			<Comment comment='Education' />

			<div className='space-y-4'>
				<S.School />
				<S.Degree />
				<S.GraduationDate />
			</div>
		</div>

		<SkillsSection />
	</div>
);

export default About;
