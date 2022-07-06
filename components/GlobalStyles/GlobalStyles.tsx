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

		--asterisk: #bd93f9;
		--brackets: #f8f8f2;
		--className: #50fa7b;
		--colon: #ff79c6;
		--comment: #6272a4;
		--contact-border: #bd93f9;
		--contact-button: #bd93f9;
		--contact-hoverButton: #bd93f9f1;
		--contact-error: #bd93f9;
		--key: #8be9fd;
		--lineNumber: #6272a4;
		--projectCard: #21222c;
		--semicolon: #f8f8f2;
		--string: #f1fa8c;
		--tag: #ff79c6;
		--tag-brackets: #f8f8f2;
		--value: #bd93f9;
	}

	.NextJS {
		&:hover {
			color: black;
			background-color: white;
			border-color: black;
		}
	}

	.React {
		color: #61dbfb;
		border-color: #61dbfb;

		&:hover {
			color: white;
			background-color: #61dbfb;
		}
	}

	.Node {
		color: #3c873a;
		border-color: #3c873a;

		&:hover {
			color: white;
			background-color: #3c873a;
		}
	}

	.TailwindCSS {
		color: #00b4b6;
		border-color: #00b4b6;

		&:hover {
			color: white;
			background-color: #00b4b6;
		}
	}

	.TypeScript {
		color: #007acc;
		border-color: #007acc;

		&:hover {
			color: white;
			background-color: #007acc;
		}
	}

	.GraphQL {
		color: #e535ab;
		border-color: #e535ab;

		&:hover {
			color: white;
			background-color: #e535ab;
		}
	}

	.Styled-Components {
		color: #ffd700;
		border-color: #ffd700;

		&:hover {
			color: white;
			background-color: #ffd700;
		}
	}

	.Stripe {
		color: #6772e5;
		border-color: #6772e5;

		&:hover {
			color: white;
			background-color: #6772e5;
		}
	}

	.MaterialUI {
		color: #2196f3;
		border-color: #2196f3;

		&:hover {
			color: white;
			background-color: #2196f3;
		}
	}

	.Firebase {
		color: #ffa611;
		border-color: #ffa611;

		&:hover {
			color: white;
			background-color: #ffa611;
		}
	}

	.PostgreSQL {
		color: #0064a5;
		border-color: #0064a5;

		&:hover {
			color: white;
			background-color: #0064a5;
		}
	}
	
	.SendGrid {
		color: #27b4e1;
		border-color: #27b4e1;

		&:hover {
			color: white;
			background-color: #27b4e1;
		}
	}
`;

const GlobalStyles = () => {
	return <CustomStyles />;
};

export default GlobalStyles;
