import { createGlobalStyle } from 'styled-components';

import DraculaOfficial from '../../themes/DraculaOfficial';
import GitHubDarkDimmed from '../../themes/GitHubDarkDimmed';
import WinterIsComing from '../../themes/WinterIsComing';
import SynthWave84 from '../../themes/SynthWave84';

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

	/* ProjectCard Tag Styles */
	${tagStyles}

	.neon-yellow {
		color: #f4eee4;
		text-shadow: 0 0 2px #000, 0 0 10px #f39f0575, 0 0 5px #f39f0575, 0 0 25px #f39f0575;
	}

	.neon-blue {
		color: #fdfdfd;
		text-shadow: 0 0 2px #000, 0 0 10px #03edf975, 0 0 5px #03edf975, 0 0 25px #03edf975;
	}

	.neon-red {
		color: #fff5f6;
		text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75;
	}
`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
