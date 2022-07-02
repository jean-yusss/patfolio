import getIcon from '../../utils/getIcon';

import { SkillContainer, SkillText } from './SkillStyles';

interface Props {
	icon: string;
	skill: string;
	margin?: string;
}

const Skill = ({ icon, skill, margin }: Props) => (
	<SkillContainer margin={margin}>
		{getIcon(icon)}
		<SkillText>{skill}</SkillText>
	</SkillContainer>
);

export default Skill;
