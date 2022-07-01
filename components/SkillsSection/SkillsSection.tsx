import Comment from '../../components/Comment/Comment';

import * as S from './SkillsSectionStyles';

const SkillsSection = () => (
	<S.SkillsSectionContainer>
		<S.Skills />

		<S.SkillsBox>
			<S.SkillsTitle>Programming Languages</S.SkillsTitle>
			<S.HTML />
			<S.CSS />
			<S.JavaScript />
			<S.TypeScript />
			<S.SQL />
		</S.SkillsBox>

		<Comment comment='Keep Scrolling' />

		<S.SkillsBox>
			<S.SkillsTitle>Libraries &amp; Frameworks</S.SkillsTitle>
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

		<Comment comment='Keep Scrolling' />

		<S.SkillsBox>
			<S.SkillsTitle>Tools</S.SkillsTitle>
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

		<Comment comment='Keep Scrolling' />

		<S.SkillsBox>
			<S.SkillsTitle>Operating Systems</S.SkillsTitle>
			<S.MacOS />
			<S.Linux />
			<S.Windows />
		</S.SkillsBox>
	</S.SkillsSectionContainer>
);

export default SkillsSection;
