import { GetStaticProps } from 'next';

const Home = () => {
	return <div>Home</div>;
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: { title: 'Home' }
	};
};

export default Home;
