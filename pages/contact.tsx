import { GetStaticProps } from 'next';

import Media from '../components/Media/Media';
import ContactForm from '../components/ContactForm/ContactForm';

import { ContactContainer } from '../styles/ContactStyles';

const Contact = () => (
	<ContactContainer>
		<Media />
		<ContactForm />
	</ContactContainer>
);

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { title: 'Contact' }
	};
};

export default Contact;
