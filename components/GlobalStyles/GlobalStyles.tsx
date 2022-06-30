import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
	:root {
		--activityBar-activeBackground: #bd93f910;
		--activityBar-activeBorder: #ff79c680;
		--activityBar-activeForeground: #f8f8f2;
		--activityBar-background: #343746;
		--activityBar-hoverForeground: #f8f8f2;
		--activityBar-inactiveForeground: #6272a4;

		--editor-background: #282a36;
		--editor-foreground: #f8f8f2;
		--editorGroupHeader-background: #191a21;

		--list-activeBackground: #44475a75;
		--list-hoverBackground: #44475a75;

		--sideBar-background: #21222c;
		--sideBar-foreground: #f8f8f2;
		--sideBarSectionHeader-background: #282a36;

		--statusBar-background: #191a21;
		--statusBar-foreground: #f8f8f2;
		--statusBar-hoverBackground: #ffffff1f;

		--tab-activeBackground: #282a36;
		--tab-activeBorder: #ff79c680;
		--tab-activeForeground: #f8f8f2;
		--tab-border: #191a21;
		--tab-inactiveBackground: #21222c;
		--tab-inactiveForeground: #6272a4;
		
		--titleBar-background: #21222c;
		--titleBar-foreground: #f8f8f2;
	}
`;

const GlobalStyles = () => {
	return <CustomStyles />;
};

export default GlobalStyles;
