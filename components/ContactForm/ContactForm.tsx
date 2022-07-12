import toast from 'react-hot-toast';
import { useTheme } from 'next-themes';
import { useForm, SubmitHandler } from 'react-hook-form';

import getIcon from '../../utils/getIcon';

import * as S from './ContactFormStyles';

const ContactForm = () => {
	const { theme } = useTheme();

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
				toast.success('Message Sent!');
			}
		} catch (error) {
			toast.error('Please Try Again!');
		}
	};

	return (
		<S.ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
			<S.ContactFormTitle theme={theme}>Or Contact Me Here!</S.ContactFormTitle>

			<S.Form>
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

				<S.SubmitButton>Submit</S.SubmitButton>
			</S.Form>
		</S.ContactFormContainer>
	);
};

export default ContactForm;
