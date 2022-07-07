import { createGlobalStyle } from 'styled-components';

import DraculaOfficial from '../../themes/DraculaOfficial';
import GitHubDarkDimmed from '../../themes/GitHubDarkDimmed';

import tagStyles from '../../styles/tagStyles';

const CustomStyles = createGlobalStyle`
	:root { 
		${DraculaOfficial}
	};

	[data-theme='GitHub Dark Dimmed'] { 
		${GitHubDarkDimmed} 
	};

	${tagStyles};
`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
