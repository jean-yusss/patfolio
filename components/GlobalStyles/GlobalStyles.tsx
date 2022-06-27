import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
	:root {
		--titleBar-background: #21222C;
		--titleBar-foreground: #F8F8F2;
	}
`;

const GlobalStyles = () => {
	return <CustomStyles />;
};

export default GlobalStyles;
