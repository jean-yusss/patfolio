import * as S from './InputFieldStyles';

import { useTheme } from 'next-themes';

const InputField = ({ label, children }: InputFieldProps) => {
	const { theme } = useTheme();

	return (
		<S.InputFieldContainer>
			<S.LabelContainer>
				<S.Label theme={theme}>{label}</S.Label>
				<S.Asterisk>*</S.Asterisk>
			</S.LabelContainer>
			{children}
		</S.InputFieldContainer>
	);
};
export default InputField;
