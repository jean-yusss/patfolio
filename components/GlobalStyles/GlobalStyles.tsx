import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
	:root {
		--activityBar-background: #343746;
		--activityBar-hoverForeground: #f8f8f2;
		--activityBar-inactiveForeground: #6272a4;

		--statusBar-background: #191a21;
		--statusBar-foreground: #f8f8f2;
		--statusBar-hoverBackground: #ffffff1f;
		
		--titleBar-background: #21222c;
		--titleBar-foreground: #f8f8f2;
	}
`;

const GlobalStyles = () => {
	return <CustomStyles />;
};

export default GlobalStyles;
