const getLanguage = (path: string) => {
	switch (path) {
		case '/':
			return 'TypeScript React';
		case '/about':
			return 'HTML';
		case '/contact':
			return 'CSS';
		case '/projects':
			return 'JavaScript';
		case '/settings':
			return 'JSON';
	}
};

export default getLanguage;
