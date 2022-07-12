import { useTheme } from 'next-themes';
import getIcon from '../../utils/getIcon';

import { SkillContainer, SkillText } from './SkillStyles';

const Skill = ({ icon, skill, margin }: SkillProps) => {
	const { theme } = useTheme();

	return (
		<SkillContainer margin={margin} theme={theme}>
			{getIcon(icon)}
			<SkillText>{skill}</SkillText>
		</SkillContainer>
	);
};

export default Skill;
