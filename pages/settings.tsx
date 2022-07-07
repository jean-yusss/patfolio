import { GetStaticProps } from 'next';
import ThemeCard from '../components/ThemeCard/ThemeCard';

import { getThemes } from './api/themes';

const Settings = ({ themes }: SettingsProps) => {
	return (
		<div className='h-full w-full overflow-y-scroll p-4'>
			<h1 className='text-xl text-center uppercase font-semibold'>Change Themes</h1>

			<div className='grid grid-cols-4 gap-8 mt-8'>
				{themes.map(theme => (
					<ThemeCard theme={theme} />
				))}
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const themes = getThemes();

	return {
		props: { themes }
	};
};

export default Settings;
