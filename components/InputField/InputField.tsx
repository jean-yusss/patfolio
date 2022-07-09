import * as S from './InputFieldStyles';

const InputField = ({ label, children }: InputFieldProps) => (
	<S.InputFieldContainer>
		<S.LabelContainer>
			<S.Label>{label}</S.Label>
			<S.Asterisk>*</S.Asterisk>
		</S.LabelContainer>
		{children}
	</S.InputFieldContainer>
);

export default InputField;
