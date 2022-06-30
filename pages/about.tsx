import * as S from '../styles/AboutStyles';

const About = () => {
	return (
		<div className='h-full w-full grid grid-cols-1 lg:grid-cols-2 p-4'>
			<div>About Me</div>
			<div>
				<h1>Skills</h1>

				<div className='border rounded-lg mt-4'>
					<h2 className='text-2xl text-center mt-2'>Programming Languages</h2>
					<S.HTML />
					<S.CSS />
					<S.JavaScript />
					<S.TypeScript />
				</div>
			</div>
		</div>
	);
};

export default About;
