import { useForm, SubmitHandler } from 'react-hook-form';

import getIcon from '../../utils/getIcon';

import * as S from './ContactFormStyles';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async data => {
		try {
			const res = await fetch('/api/email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});

			if (res.ok) {
				reset();
				alert('message sent!');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<S.ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
			<S.ContactFormTitle>Or Contact Me Here!</S.ContactFormTitle>

			<div className='space-y-3'>
				<S.NameContainer>
					<S.TextInput {...register('name', { required: true })} />
					{errors.name && (
						<S.ErrorContainer>
							{getIcon('error')}
							<S.Error>This field is required</S.Error>
						</S.ErrorContainer>
					)}
				</S.NameContainer>

				<S.EmailContainer>
					<S.EmailInput {...register('email', { required: true })} />
					{errors.email && (
						<S.ErrorContainer>
							{getIcon('error')}
							<S.Error>This field is required</S.Error>
						</S.ErrorContainer>
					)}
				</S.EmailContainer>

				<S.SubjectContainer>
					<S.TextInput {...register('subject', { required: true })} />
					{errors.subject && (
						<S.ErrorContainer>
							{getIcon('error')}
							<S.Error>This field is required</S.Error>
						</S.ErrorContainer>
					)}
				</S.SubjectContainer>

				<S.MessageContainer>
					<S.TextArea {...register('message', { required: true })} />
					{errors.message && (
						<S.ErrorContainer>
							{getIcon('error')}
							<S.Error>This field is required</S.Error>
						</S.ErrorContainer>
					)}
				</S.MessageContainer>

				<button className='bg-[#bd93f9] py-3 w-full rounded-md uppercase text-xs sm:text-sm font-bold lg:text-base hover:bg-[#bd93f9f1]'>
					Submit
				</button>
			</div>
		</S.ContactFormContainer>
	);
};

export default ContactForm;
