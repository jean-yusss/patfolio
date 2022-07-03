import * as S from './InputFieldStyles';

interface Props {
	label: string;
	children: React.ReactNode;
}

const InputField = ({ label, children }: Props) => (
	<S.InputFieldContainer>
		<S.LabelContainer>
			<S.Label>{label}</S.Label>
			<S.Asterisk>*</S.Asterisk>
		</S.LabelContainer>
		{children}
	</S.InputFieldContainer>
);

export default InputField;
