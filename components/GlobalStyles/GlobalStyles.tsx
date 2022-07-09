import { createGlobalStyle } from 'styled-components';

import DraculaOfficial from '../../themes/DraculaOfficial';
import GitHubDarkDimmed from '../../themes/GitHubDarkDimmed';
import WinterIsComing from '../../themes/WinterIsComing';
import SynthWave84 from '../../themes/SynthWave84';
import Nord from '../../themes/Nord';
import ShadesOfPurple from '../../themes/ShadesOfPurple';
import VueTheme from '../../themes/VueTheme';

import tagStyles from '../../styles/tagStyles';

const CustomStyles = createGlobalStyle`
	:root {
		font-style: var(--fontStyle)
	}

	/* Dracula Official Theme */
	[data-theme='Dracula Official'] { 
		${DraculaOfficial}
	};

	/* GitHub Dark Dimmed Theme */
	[data-theme='GitHub Dark Dimmed'] { 
		${GitHubDarkDimmed} 
	};

	/* Winter Is Coming (Dark Blue) Theme */
	[data-theme='Winter Is Coming'] { 
		${WinterIsComing} 
	};

	/* SynthWave '84 (Neon Dreams) Theme */
	[data-theme="SynthWave '84"] { 
		${SynthWave84} 
	};

	/* Nord Theme */
	[data-theme="Nord"] { 
		${Nord} 
	};

	/* Shades Of Purple Theme */
	[data-theme="Shades Of Purple"] { 
		${ShadesOfPurple} 
	};

	/* Vue Theme */
	[data-theme="Vue Theme"] { 
		${VueTheme} 
	};

	/* ProjectCard Tag Styles */
	${tagStyles}
`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
