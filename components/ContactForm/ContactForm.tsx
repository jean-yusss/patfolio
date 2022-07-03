import * as S from './ContactFormStyles';

const ContactForm = () => {
	return (
		<S.ContactFormContainer>
			<S.ContactFormTitle>Or Contact Me Here!</S.ContactFormTitle>

			<div className='space-y-4 pb-12'>
				<S.NameInput />
				<S.EmailInput />
				<S.SubjectInput />
				<S.MessageInput />

				<button className='bg-[#bd93f9] py-3 w-full rounded-md uppercase text-xs sm:text-sm font-bold lg:text-base hover:bg-[#bd93f9f1]'>
					Submit
				</button>
			</div>
		</S.ContactFormContainer>
	);
};

export default ContactForm;
