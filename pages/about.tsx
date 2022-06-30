import Comment from '../components/Comment/Comment';
import * as S from '../styles/AboutStyles';

const About = () => {
	return (
		<div className='h-full w-full grid grid-cols-1 lg:grid-cols-2 p-4'>
			<div>About Me</div>
			<div className='space-y-8 overflow-y-scroll pb-12 scrollbar-hide mt-8 lg:mt-0'>
				<div className='text-lg'>
					<span>{'<'}</span>
					<span className='text-[#FF79C6]'>h1</span>
					<span className='text-[#50FA7B] ml-2'>className</span>
					<span className='text-[#ff79c6]'>=</span>
					<span className='text-[#f1fa8c]'>'text-2xl ml-2 font-semibold'</span>
					<span>{'>'}</span>
					<h1 className='text-2xl ml-5 font-semibold uppercase'>Skills</h1>
					<span>{'</'}</span>
					<span className='text-[#FF79C6]'>h1</span>
					<span>{'>'}</span>
				</div>

				<div className='border rounded-lg mt-4'>
					<h2 className='text-xl text-center mt-2 font-semibold uppercase'>
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
					<h2 className='text-xl text-center mt-2 uppercase font-semibold'>
						Libraries &amp; Frameworks
					</h2>
					<S.React />
					<S.ReactNative />
					<S.NextJS />
					<S.NodeJS />
					<S.Express />
					<S.MaterialUI />
					<S.TailwindCSS />
					<S.Redux />
				</div>

				<Comment comment='Keep Scrolling' />

				<div className='border rounded-lg mt-4'>
					<h2 className='text-xl text-center mt-2 uppercase font-semibold'>Tools</h2>
					<S.VSCode />
					<S.Terminal />
					<S.Git />
					<S.GitHub />
					<S.NPM />
					<S.Yarn />
					<S.Postman />
					<S.Photoshop />
					<S.Word />
					<S.Excel />
					<S.PowerPoint />
				</div>

				<Comment comment='Keep Scrolling' />

				<div className='border rounded-lg mt-4'>
					<h2 className='text-xl text-center mt-2 uppercase font-semibold'>
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
