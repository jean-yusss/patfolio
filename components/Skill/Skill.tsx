import getIcon from '../../utils/getIcon';

import { SkillContainer, SkillText } from './SkillStyles';

interface Props {
	icon: string;
	skill: string;
	padding?: string;
}

const Skill = ({ icon, skill, padding }: Props) => (
	<SkillContainer padding={padding}>
		{getIcon(icon)}
		<SkillText>{skill}</SkillText>
	</SkillContainer>
);

export default Skill;
