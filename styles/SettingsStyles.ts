import styled from 'styled-components';

export const SettingsContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow-y: scroll;
	padding: 1rem;
`;

export const SettingsTitle = styled.h1`
	font-size: 1.25rem;
	line-height: 1.75rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
`;

export const Themes = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 2rem;
	margin-top: 2rem;

	@media (min-width: 530px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (min-width: 1280px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
`;