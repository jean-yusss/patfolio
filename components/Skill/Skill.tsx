import getIcon from '../../utils/getIcon';

import { SkillContainer, SkillText } from './SkillStyles';

const Skill = ({ icon, skill, margin }: SkillProps) => (
	<SkillContainer margin={margin}>
		{getIcon(icon)}
		<SkillText>{skill}</SkillText>
	</SkillContainer>
);

export default Skill;
