import * as S from '../styles/ContactStyles';

const Contact = () => {
	return (
		<S.ContactContainer>
			<div className='font-medium'>
				<div className='flex'>
					<p className='text-[#50fa7b]'>.contactInfo</p>
					<span className='ml-2'>{'{'}</span>
				</div>
				<S.PortfolioWebsite />

				<S.GitHub />

				<p>{'}'}</p>
			</div>
			<div>Contact form</div>
		</S.ContactContainer>
	);
};

export default Contact;
