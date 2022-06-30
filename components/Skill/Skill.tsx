import getIcon from '../../utils/getIcon';

import { SkillContainer, SkillText } from './SkillStyles';

interface Props {
	icon: string;
	skill: string;
}

const Skill = ({ icon, skill }: Props) => (
	<SkillContainer>
		{getIcon(icon)}
		<SkillText>{skill}</SkillText>
	</SkillContainer>
);

export default Skill;
