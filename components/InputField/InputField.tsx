import * as S from './InputFieldStyles';

interface Props {
	label: string;
	type: string;
}

const InputField = ({ label, type }: Props) => {
	return (
		<S.InputFieldContainer>
			<S.LabelContainer>
				<S.Label>{label}</S.Label>
				<S.Asterisk>*</S.Asterisk>
			</S.LabelContainer>

			{type === 'text' ? (
				<S.TextInput />
			) : type === 'email' ? (
				<S.EmailInput />
			) : (
				<S.TextArea />
			)}
		</S.InputFieldContainer>
	);
};

export default InputField;
