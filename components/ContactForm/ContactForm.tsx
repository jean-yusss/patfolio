import * as S from './ContactFormStyles';

const ContactForm = () => {
	return (
		<S.ContactFormContainer>
			<S.ContactFormTitle>Or Contact Me Here!</S.ContactFormTitle>

			<div className='space-y-4 pb-12'>
				<div className='space-y-2'>
					<p className='uppercase text-xs sm:text-sm lg:text-base font-semibold'>Name</p>
					<input type='text' className='w-full rounded-md outline-none text-black p-1' />
				</div>

				<div className='space-y-2'>
					<p className='uppercase text-xs sm:text-sm lg:text-base font-semibold'>Email</p>
					<input type='text' className='w-full rounded-md outline-none text-black p-1' />
				</div>

				<div className='space-y-2'>
					<p className='uppercase text-xs sm:text-sm lg:text-base font-semibold'>
						Subject
					</p>
					<input type='text' className='w-full rounded-md outline-none text-black p-1' />
				</div>

				<div className='space-y-2'>
					<p className='uppercase text-xs sm:text-sm lg:text-base font-semibold'>
						Message
					</p>
					<textarea rows={5} className='w-full rounded-md text-black outline-none p-1' />
				</div>

				<button className='bg-[#bd93f9] py-3 w-full rounded-md uppercase text-xs sm:text-sm font-bold lg:text-base hover:bg-[#bd93f9f1]'>
					Submit
				</button>
			</div>
		</S.ContactFormContainer>
	);
};

export default ContactForm;
