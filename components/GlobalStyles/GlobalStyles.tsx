import { createGlobalStyle } from 'styled-components';

import DraculaOfficial from '../../themes/DraculaOfficial';
import GitHubDarkDimmed from '../../themes/GitHubDarkDimmed';
import WinterIsComing from '../../themes/WinterIsComing';

import tagStyles from '../../styles/tagStyles';

const CustomStyles = createGlobalStyle`
	:root {
		font-style: var(--font)
	}

	[data-theme='Dracula Official'] { 
		${DraculaOfficial}
	};

	[data-theme='GitHub Dark Dimmed'] { 
		${GitHubDarkDimmed} 
	};

	[data-theme='Winter Is Coming'] { 
		${WinterIsComing} 
	};

	${tagStyles};
`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
