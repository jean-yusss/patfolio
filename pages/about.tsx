import Comment from '../components/Comment/Comment';

import * as S from '../styles/AboutStyles';

import getIcon from '../utils/getIcon';

const About = () => {
	return (
		<div className='h-full w-full grid grid-cols-1 lg:grid-cols-2 p-4 overflow-y-scroll lg:gap-8 lg:overflow-hidden scrollbar-hide'>
			<div className='space-y-4 pb-12 scrollbar-hide lg:overflow-y-scroll'>
				<S.Name />

				<div className=''>
					<span>{'<'}</span>
					<span className='text-[#FF79C6]'>p</span>
					<span className='text-[#50FA7B] ml-2'>className</span>
					<span className='text-[#ff79c6]'>=</span>
					<span className='text-[#f1fa8c]'>'text-sm text-justify font-normal ml-5'</span>
					<span>{'>'}</span>

					<h1 className='ml-5 my-1 text-sm lg:text-base font-normal text-justify'>{`From the moment I first produced "Hello World!" in my console, I knew that I was hooked to software development. Software development has never been "just a job" for me, but an opportunity engaging challenges to continually learn and develop my skills in creating applications and quality code. What started as a simple "Hello World!" has become a full-fledged passion that only gets more exciting as time goes by!`}</h1>

					<span>{'</'}</span>
					<span className='text-[#FF79C6]'>p</span>
					<span>{'>'}</span>
				</div>

				<Comment comment='Education' />

				<div className='space-y-4'>
					<div className='flex items-center space-x-4'>
						{getIcon('school')}
						<p className='font-semibold'>University of Central Florida</p>
					</div>
					<div className='flex items-center space-x-4'>
						{getIcon('graduate')}
						<p className='font-semibold'>Bachelor of Science in Mechanical Engineering</p>
					</div>
					<div className='flex items-center space-x-4'>
						{getIcon('calendar')}
						<p className='font-semibold'>December 2018</p>
					</div>
				</div>
			</div>

			<div className='space-y-8 pb-12 scrollbar-hide lg:overflow-y-scroll'>
				<S.Skills />

				<div className='border rounded-lg mt-4'>
					<h2 className='lg:text-lg text-center mt-2 font-semibold uppercase'>
						Programming Languages
					</h2>
					<S.HTML />
					<S.CSS />
					<S.JavaScript />
					<S.TypeScript />
					<S.SQL />
				</div>

				<Comment comment='Keep Scrolling' />

				<div className='border rounded-lg mt-4'>
					<h2 className='lg:text-lg text-center mt-2 uppercase font-semibold'>
						Libraries &amp; Frameworks
					</h2>
					<S.React />
					<S.ReactNative />
					<S.NextJS />
					<S.NodeJS />
					<S.GraphQL />
					<S.Express />
					<S.MaterialUI />
					<S.TailwindCSS />
					<S.Redux />
					<S.Firebase />
					<S.Stripe />
				</div>

				<Comment comment='Keep Scrolling' />

				<div className='border rounded-lg mt-4'>
					<h2 className='lg:text-lg text-center mt-2 uppercase font-semibold'>Tools</h2>
					<S.VSCode />
					<S.Terminal />
					<S.Git />
					<S.GitHub />
					<S.NPM />
					<S.Yarn />
					<S.PostgreSQL />
					<S.Postman />
					<S.Photoshop />
					<S.Word />
					<S.Excel />
					<S.PowerPoint />
				</div>

				<Comment comment='Keep Scrolling' />

				<div className='border rounded-lg mt-4'>
					<h2 className='lg:text-lg text-center mt-2 uppercase font-semibold'>
						Operating Systems
					</h2>
					<S.MacOS />
					<S.Linux />
					<S.Windows />
				</div>
			</div>
		</div>
	);
};

export default About;
