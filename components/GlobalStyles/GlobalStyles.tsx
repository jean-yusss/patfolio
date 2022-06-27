import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
	:root {
		--activityBar-background: #343746;
		--activityBar-hoverForeground: #f8f8f2;
		--activityBar-inactiveForeground: #6272a4;
		--titleBar-background: #21222C;
		--titleBar-foreground: #F8F8F2;
	}
`;

const GlobalStyles = () => {
	return <CustomStyles />;
};

export default GlobalStyles;
