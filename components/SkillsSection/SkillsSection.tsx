import { useTheme } from 'next-themes';

import * as S from './SkillsSectionStyles';

const SkillsSection = () => {
	const { theme } = useTheme();

	return (
		<S.SkillsSectionContainer>
			<S.Skills />

			<S.SkillsBox theme={theme}>
				<S.SkillsTitle theme={theme}>Programming Languages</S.SkillsTitle>
				<S.HTML />
				<S.CSS />
				<S.JavaScript />
				<S.TypeScript />
				<S.SQL />
			</S.SkillsBox>

			<S.KeepScrolling />

			<S.SkillsBox theme={theme}>
				<S.SkillsTitle theme={theme}>Libraries &amp; Frameworks</S.SkillsTitle>
				<S.React />
				<S.ReactNative />
				<S.NextJS />
				<S.NodeJS />
				<S.GraphQL />
				<S.Express />
				<S.MaterialUI />
				<S.TailwindCSS />
				<S.Redux />
				<S.Firebase />
				<S.Stripe />
			</S.SkillsBox>

			<S.KeepScrolling />

			<S.SkillsBox theme={theme}>
				<S.SkillsTitle theme={theme}>Tools</S.SkillsTitle>
				<S.VSCode />
				<S.Terminal />
				<S.Git />
				<S.GitHub />
				<S.NPM />
				<S.Yarn />
				<S.PostgreSQL />
				<S.Postman />
				<S.Photoshop />
				<S.Word />
				<S.Excel />
				<S.PowerPoint />
			</S.SkillsBox>

			<S.KeepScrolling />

			<S.SkillsBox theme={theme}>
				<S.SkillsTitle theme={theme}>Operating Systems</S.SkillsTitle>
				<S.MacOS />
				<S.Linux />
				<S.Windows />
			</S.SkillsBox>
		</S.SkillsSectionContainer>
	);
};

export default SkillsSection;
